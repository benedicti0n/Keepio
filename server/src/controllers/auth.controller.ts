import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import User from "../models/user.model"

export const handleSignUp = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username: username })
        if (!!user) {
            res.status(403).json({ message: "User already exists with this username" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            password: hashedPassword,
        })

        await newUser.save()

        res.status(200).json({ message: "Signed Up" })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

export const handleLogin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        if (!user) {
            res.status(403).json({ message: "User doesnt exist" })
        }

        const passwordMatch = await bcrypt.compare(password, user!.password)
        if (!passwordMatch) {
            res.status(403).json({ message: "Wrong password" })
        }

        const secretKey = process.env.SECRET_KEY as string
        const token = jwt.sign({ userId: user?._id }, secretKey, { expiresIn: '24h' })

        res.send(token)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}