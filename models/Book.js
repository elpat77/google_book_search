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
    type: mongoose.SchemaTypes.Url
  },
  link: {
    type: mongoose.SchemaTypes.Url
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
