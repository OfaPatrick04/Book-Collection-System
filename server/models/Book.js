const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  genre: { type: String, required: true },
  copiesLeft: { type: Number, default: 1 },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;