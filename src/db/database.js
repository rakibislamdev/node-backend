import mongoose from "mongoose";
import { DB_NAME } from "../helper/constants.js";
const connectDB = async () => { 
    try {
        const con = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log(`Database connected at Port: ${con.connection.port}`)
    } catch (error) {
        console.log("🚀 ~ Database connection error:", error);
        process.exit(1);
    }
    
};

export default connectDB;