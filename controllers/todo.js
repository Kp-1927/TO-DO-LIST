// controllers/todo.js
const Todo = require("../models/to_do");

exports.getAllTodo = (req, res) => {
    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "To-do not found", error: err.message })
        );
};

exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
        .then((data) => res.json({ message: "Added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add", error: err.message })
        );
};

exports.putUpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update ", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: " Deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "ERROR!!", error: err.message })
        );
};