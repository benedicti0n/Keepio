import mongoose, { Schema, model, Types } from "mongoose"

interface ITagTypes {
    title: string;
}

const tagSchema = new Schema<ITagTypes>({
    title: {
        type: String,
        unique: true,
        required: true,
    }
}, { timestamps: true })

const Tag = model<ITagTypes>("tag", tagSchema)