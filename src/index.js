import connectDB from "./db/database.js";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

// database connection
connectDB();