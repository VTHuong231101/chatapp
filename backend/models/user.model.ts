import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    passWord: {
        type: String,
        required: true,
        minlength: 8
    },
    gender: {
        type: String,
        required: true,
        enum:["male", "female"]
    },
    profilePic: {
        type: String,
        default: ""
    }
});

const User = mongoose.model("User", userSchema);

export default User;