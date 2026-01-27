import express from 'express';
import { db } from '../config/db.js';
import { protect } from '../middleware/auth.middleware.js';
import { isAdmin } from '../middleware/role.middleware.js';
import { serverInfo } from '../serverHandling.js';

const router = express.Router();
router.get("/dashboard", protect , isAdmin, async(req, res) =>{
    const [users] = await db.query("SELECT id, name, email, role FROM users");
    res.json({
        message: "Admin Dashboard Loaded Successfully",
        users,
        ...serverInfo()
    });
    res.json(users);
})
export default router;