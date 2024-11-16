import "dotenv/config"
import express, { Request, Response } from "express"

import authRoutes from "./routes/auth.routes"

const app = express()
const PORT = process.env.PORT

app.get("/", (req: Request, res: Response) => {
    res.send("hello world")
})

app.use("api/v1", authRoutes)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})