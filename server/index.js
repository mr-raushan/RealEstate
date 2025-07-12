import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import userRoute from "./route/user.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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

// api call
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
