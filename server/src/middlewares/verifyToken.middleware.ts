import { NextFunction, Request, Response } from "express"
import jwt, { decode } from "jsonwebtoken"

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header("Authorization") as string | undefined
        const secretKey = process.env.SECRET_KEY as string

        if (!token) {
            res.status(403).json({ message: "Login first" })
        }

        const decoded = jwt.verify(token!, secretKey) as { userId: string }

        //@ts-ignore
        req._id = decoded.userId

        next()
    } catch (error) {
        res.status(401).json({ message: "Access Denied" })
    }
}