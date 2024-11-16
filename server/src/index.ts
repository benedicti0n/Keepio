import "dotenv/config"
import express from "express"

import authRoutes from "./routes/auth.routes"
import contentRoutes from "./routes/content.routes"
import connectDB from "./utils/connect"

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB()

app.use("/api/v1", authRoutes)
app.use("/api/v1", contentRoutes)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})