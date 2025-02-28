import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:['mentor','mentee'],
        required:true
    },
    gender:{
        type: String,
        enum:['male', 'female'],
        required: true
    },
    profilePhoto:{
        type: String,
        default: ''
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    
    resetPasswordToken:String,
    resetPasswordExpiresAt: Date,
    verificationToken:String,
    verificationTokenExpiresAt: Date,
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);