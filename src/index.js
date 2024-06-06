import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config();
connectDB();

const app=express();
app.use(express.json())

const port=process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})