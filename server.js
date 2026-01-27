import dotenv from "dotenv";
import app from './app.js';

dotenv.config();
const PORT = process.env.PORT
const SERVER_NAME = process.env.SERVER_NAME

app.get('/', (req, res) => {
    res.send(`HEllo from ${SERVER_NAME} running on port ${PORT}`);
})


app.listen(process.env.PORT, () =>{
    console.log(`${SERVER_NAME} is running on port ${PORT}`);
})