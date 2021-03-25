const { Book } = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    Book.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(BookModel => res.json(BookModel))
      .catch(err => res.status(400).json(err));
  },
  finBookyId: function(req, res) {
    Book.Book
      .finBookyId(req.params.id)
      .then(BookModel => res.json(BookModel))
      .catch(err => res.status(400).json(err));
  },
  create: function(req, res) {
    Book.Book
      .create(req.body)
      .then(BookModel => res.json(BookModel))
      .catch(err => res.status(400).json(err));
  },
  update: function(req, res) {
    Book.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(BookModel => res.json(BookModel))
      .catch(err => res.status(400).json(err));
  },
  remove: function(req, res) {
    Book.Book
      .finBookyId({ _id: req.params.id })
      .then(BookModel => BookModel.remove())
      .then(BookModel => res.json(BookModel))
      .catch(err => res.status(400).json(err));
  }
};