import express from "express";
import dotenv from "dotenv";
import home from "./router/home.router.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT | 4000;

app.use("/", home);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
