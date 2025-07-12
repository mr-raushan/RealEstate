import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import userRoute from "./route/user.js";

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

// middleware
app.use(express.json());

// api call
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
