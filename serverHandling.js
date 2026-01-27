import dotenv from "dotenv";
dotenv.config();

export const serverInfo = () => ({
    server:process.env.SERVER_NAME,
    port:process.env.PORT
})