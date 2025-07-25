import express from "express";
import { login, logout, SignUp } from "../controllers/User.js";
const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", login);
router.post("/logout", logout);

export default router;
