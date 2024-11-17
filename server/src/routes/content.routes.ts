import express from "express"
import { createContent, fetchAllContent } from "../controllers/content.controller"
import { verifyToken } from "../middlewares/verifyToken.middleware"

const router = express.Router()

router.post("/content", verifyToken, createContent)
router.get("/content", verifyToken, fetchAllContent)

export default router