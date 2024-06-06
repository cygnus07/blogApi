import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connnected ${conn.connection.host}`)
    } catch (error) {
        console.error('Mongodb conection failed', error)
        process.exit(1)
    }
};

export default connectDB