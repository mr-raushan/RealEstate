import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const PORT = process.env.PORT || 4000;

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongoDB connection established");
  })
  .catch((error) => {
    console.log("connection failed");
    console.log(error);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
