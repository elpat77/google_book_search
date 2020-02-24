const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.Todo.find().then(todos => {
    res.send(todos);
  });
});

router.get("/find/:id", (req, res) => {
  db.Todo.find({ _id: req.params.id }).then(foundTodo => {
    res.send(foundTodo);
  });
});

router.post("/new", (req, res) => {
  db.Todo.create({ text: req.body.text, complete: req.body.complete }).then(
    newTodo => {
      res.send(newTodo);
    }
  );
});

router.patch("/update", (req, res) => {
  db.Todo.findOneAndUpdate(
    { _id: req.query.id },
    { text: req.query.text }
  ).then(updatedTodo => {
    res.send({ message: "success", todo: updatedTodo });
  });
});

router.delete("/delete/:id", (req, res) => {
  db.Todo.deleteOne({ _id: req.params.id }).then(() => {
    res.send("success");
  });
});

module.exports = router;
