import "dotenv/config"
import express from "express"
import cors from "cors"

import authRoutes from "./routes/auth.routes"
import contentRoutes from "./routes/content.routes"
import connectDB from "./utils/connect"

const app = express()
const PORT = process.env.PORT
const clientUrl = process.env.CLIENT_URL

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

connectDB()

app.use("/api/v1", authRoutes)
app.use("/api/v1", contentRoutes)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})