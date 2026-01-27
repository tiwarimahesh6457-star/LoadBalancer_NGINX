import express from "express";
import cors from "cors"
import cookieparser from "cookie-parser";
import authRoutes from "./router/auth.router.js";
import userRoutes from "./router/user.router.js";
import adminRoutes from "./router/admin.router.js";
import logout from "./controller/auth.controller.js"
import {serverInfo} from "./serverHandling.js"

const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(express.static('public'))
app.use(cors({
    origin:true,
    credentials:true
}))
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/logout", logout);
app.get("/api/serverinfo", (req, res) => {
    res.json({
        ...serverInfo()
    });
});

export default app;