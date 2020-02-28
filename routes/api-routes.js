const express = require("express");
const router = express.Router();
const db = require("../models");


// `/api/books` (get) - Should return all saved books as JSON.
router.get("/api/books", (req, res) => {
  db.Book.find().then(books => {
    res.json(books);
  });
});

//  `/api/books` (post) - Will be used to save a new book to the database.
router.post("/api/books", (req, res) => {
  db.Book.create({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.descrition,
    image: req.body.image,
    link: link.body.link,
    id: req.body.id
  }).then(
    newBook => {
      res.json(newBook);
    }
  );
});


// `/api/books/:id` (get) - Will be used to search for a book by id, returned as JSON.
router.get("/api/books/:id", (req, res) => {
  db.Book.find({ _id: req.params.id }).then(foundBook => {
    res.json(foundBook);
  });
});


// `/api/books/update` (patch) - Will be used to update a book, returned as JSON.
router.patch("/api/books/update", (req, res) => {
  db.Book.findOneAndUpdate(
    { _id: req.query.id },
    { title: req.query.title }
  ).then(updatedBook => {
    res.json({ message: "success", todo: updatedBook });
  });
});

// `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
router.delete("/api/books/:id", (req, res) => {
  db.Book.deleteOne({ _id: req.params.id }).then(() => {
    res.json("success");
  });
});

module.exports = router;
