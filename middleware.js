import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const token="eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc1MzA3MjMxNH0.IuDZtNqXHU0hr0ZYvSceQrmpZke5mQfh-JnLDXvyAk4"
    //await request.headers.get("Authorization")?.split("")[1]

    if(!token){
        return NextResponse.json({ message: "トークンがありません" })
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodeJwt = await jwtVerify(token,secretKey)
        return NextResponse.next()
    }catch{
        return NextResponse.json({ message: "トークンが正しくないのでログインしてください" })
    }
    
}

export const config = {
    matcher: ["/api/item/create","/api/item/update/:path*","/api/item/delete/:path*"],
}