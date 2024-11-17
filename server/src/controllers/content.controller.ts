import express, { Request, Response } from "express"
import Content from "../models/content.model"
import mongoose from "mongoose"

export const createContent = async (req: Request, res: Response) => {
    try {
        const data = req.body
        //@ts-ignore
        const userId = req._id
        const tagsObjectIds = data.tags.map((tagId: string) => new mongoose.Types.ObjectId(tagId))

        const content = new Content({
            link: data.link,
            type: data.type,
            title: data.title,
            tags: tagsObjectIds,
            userId: userId
        })

        console.log(content);

        await content.save()
        res.status(200).json({ message: "Content saved successfully" })
    } catch (error) {
        res.status(500).json({ messsage: "Server error" })
    }
}

export const fetchAllContent = async (req: Request, res: Response) => {
    try {
        //@ts-ignore
        const userId = req._id

        const content = await Content.find({ userId: userId })

        console.log(content);

        res.status(200).json({ message: "All content fetched" })

    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}