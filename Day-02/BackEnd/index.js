import express from "express";
import dotenv from "dotenv";
import home from "./routes/home.route.js";
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use("/", home);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
