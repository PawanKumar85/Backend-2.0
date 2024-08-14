import express from "express";
import { home, myData } from "../controllers/home.controller.js";
const router = express.Router();

router.get("/", home);
router.get("/api/v1/data", myData);
// router.get("/api/data", myData);

export default router;
