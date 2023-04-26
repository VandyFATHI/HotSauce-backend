const mongoose = require('mongoose');

const SauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String },
    heat: { type: Number, min: 1, max: 1, default: 0 },
    likes: { type: Number, required: true, default: 0 },
    dislikes: { type: Number, required: true, default: 0 },
    usersLiked: { type: [String], required: true },
    usersDisliked: { type: [String], required: true }
});

exports.models = mongoose.model("Sauce", SauceSchema);