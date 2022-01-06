const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "string is needed"],
        unique: true,
        maxlength: [30, "Number"],
    },
    description: {
        type: "Number",
        required: true,
    },
});