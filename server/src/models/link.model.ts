import mongoose, { Schema, model, Types } from "mongoose";

interface ILinkTypes {
    hash: string;
    userId: Types.ObjectId;
}

const linkSchema = new Schema<ILinkTypes>({
    hash: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, { timestamps: true })

const Link = model<ILinkTypes>("link", linkSchema)