// models/todo.js
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
});

const Todo = mongoose.model("to_do", TodoSchema);

module.exports = Todo;