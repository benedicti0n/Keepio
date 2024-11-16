import mongoose from "mongoose";
import { Schema, model } from "mongoose"

interface IUserTypes {
    username: string;
    password: string;
}

const userSchema = new Schema<IUserTypes>({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        types: String,
        required: true,
    }
}, { timestamps: true })

const User = model<IUserTypes>("user", userSchema)

export default User