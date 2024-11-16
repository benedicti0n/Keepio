import mongoose, { Types } from "mongoose"
import { Schema, model } from "mongoose"

interface IContentTypes {
    link: string;
    type: string;
    title: string;
    tags: Types.ObjectId[];
    userId: Types.ObjectId;
}

const contentSchema = new Schema<IContentTypes>({
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["image", "video", "article", "audio"],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag"
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, { timestamps: true })

const Content = model<IContentTypes>("content", contentSchema)

export default Content