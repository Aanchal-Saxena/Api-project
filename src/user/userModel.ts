import mongoose from "mongoose";
import { User } from "./userTypes";

const userSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export mongoose.model('User',userSchema); //collection with name "users" will be created, if u want to give ur own name, provide it in third argument