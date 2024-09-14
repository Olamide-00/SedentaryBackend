const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true // Optional: Remove spaces around the name
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures the email is unique
        trim: true // Optional: Remove spaces around the email
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const User = mongoose.model("User", UserSchema);

module.exports = User;
