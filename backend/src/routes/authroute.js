import express from "express";
import { protectedRoute } from "../middlewares/auth_middleware.js";
import { 
    checkAuth,
    login,
    logout, 
    signup,
    updateProfile,
} from "../controllers/authCtrl.js";
const router = express.Router();

router.post("/signup", signup); 
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectedRoute, updateProfile);
router.get("/check", protectedRoute, checkAuth);

export default router;