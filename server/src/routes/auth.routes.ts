import express from "express"
import { handleSignUp, handleLogin } from "../controllers/auth.controllers"

const router = express.Router()

router.post("/signup", handleSignUp)
router.post("/login", handleLogin)

export default router