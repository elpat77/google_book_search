const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: "String is required"
  },
  complete: {
    type: Boolean,
    default: false
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
