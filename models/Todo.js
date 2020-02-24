const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
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

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
