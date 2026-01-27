import mqsql from 'mysql2/promise';
import dotenv from "dotenv";
dotenv.config({quiet: true});

export const db = mqsql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
console.log("DB_USER =", process.env.DB_USER);
