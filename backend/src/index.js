import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/authroute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on PORT " + PORT);
  connectDB();
});
