const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.Book.find().then(books => {
    res.send(books);
  });
});

router.get("/find/:id", (req, res) => {
  db.Book.find({ _id: req.params.id }).then(foundBook => {
    res.send(foundBook);
  });
});

router.post("/new", (req, res) => {
  db.Book.create({ text: req.body.text, complete: req.body.complete }).then(
    newBook => {
      res.send(newBook);
    }
  );
});

router.patch("/update", (req, res) => {
  db.Book.findOneAndUpdate(
    { _id: req.query.id },
    { text: req.query.text }
  ).then(updatedBook => {
    res.send({ message: "success", todo: updatedBook });
  });
});

router.delete("/delete/:id", (req, res) => {
  db.Book.deleteOne({ _id: req.params.id }).then(() => {
    res.send("success");
  });
});

module.exports = router;
