import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import dotenv from 'dotenv'

dotenv.config()
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// Routes
app.use("/api/users", userRoutes);
 
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`The Server running at http://localhost:${PORT}`);
});