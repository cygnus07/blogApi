import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import postRoutes from "./routes/post.routes.js"
import commentRoutes from "./routes/post.routes.js"
import errorHandler from "./middlewares/error.middleware.js"


dotenv.config();
connectDB();

const app=express();
app.use(express.json())

app.use('/api/posts', postRoutes)
app.use('/api/posts', commentRoutes)
app.use(errorHandler)

const port=process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})