const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: "Title is required"
  },
  authors: {
    type: [],
    default: []
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  bookId: {
    type: String
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
