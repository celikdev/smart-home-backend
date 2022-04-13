import express from "express";
import { getLights } from "../controller/Lights.js";

const router = express.Router();

router.get("/", getLights);

export default router;
