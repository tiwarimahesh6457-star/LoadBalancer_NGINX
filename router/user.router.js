import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { serverInfo } from '../serverHandling.js';

const router = express.Router();
router.get("/dashboard", protect , async(req, res) =>{
    res.json({message:"Welcome User",
        ...serverInfo()
    })
})
export default router;