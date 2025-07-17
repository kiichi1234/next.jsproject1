import mongoose from "mongoose"

const connectDB=async()=>{
    try{

        await mongoose.connect("mongodb+srv://kiichi:AWqOC8du2jE8g1hy@cluster0.6fv4ihi.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
        
        
    }catch{
        console.log("Failure: Unconnected to MongoDB")
        throw new Error
    }
}
export default connectDB