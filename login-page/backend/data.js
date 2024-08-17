const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Export the model
const User = mongoose.model("User", UserSchema);

module.exports = User;
