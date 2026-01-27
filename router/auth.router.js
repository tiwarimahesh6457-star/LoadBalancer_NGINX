import express from "express";
import {
    register,
    login,
    refreshToken,
    logout
} from "../controller/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.post("/logout", protect ,logout);

export default router;
