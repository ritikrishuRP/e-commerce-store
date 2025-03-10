import express from "express"
import { login, logout, refreshToken, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

router.get("/refresh_token", refreshToken)

// router.get("/getProfile")

export default router;