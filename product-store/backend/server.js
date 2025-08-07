import express from "express";

import dotenv from "dotenv";

dotenv.config();

import { connectDB } from "./config/db.js";

const app = express();

app.get("/products", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
