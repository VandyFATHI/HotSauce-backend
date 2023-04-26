const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true }
});

exports.models = mongoose.model("User", UserSchema);