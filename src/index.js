import connectDB from "./db/database.js";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

// database connection
connectDB();

// express server
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

// routes
import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);
