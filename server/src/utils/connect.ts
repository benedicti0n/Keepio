import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionUrl = process.env.CONNECTION_URI as string | undefined
        await mongoose.connect(connectionUrl!)
        console.log("Database connected!!!");
    } catch (error) {
        console.error(error);
    }
}

export default connectDB