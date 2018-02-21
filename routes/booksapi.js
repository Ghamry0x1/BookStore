const express = require('express');
const router = express.Router();
Book = require('../models/book');

router.get('/', function(req, res) {
    Book.getBooks((err, books) => {
        if(err) {console.log(err);}
        else {res.json(books);}
    })
});

router.get('/:_id', function(req, res) {
    Book.getBookById(req.params._id, (err, book) => {
        if(err) {console.log(err);}
        else {res.json(book);}
    })
});

router.post('/', function(req, res) {
    let book = req.body;
    Book.addBook(book, (err, book) => {
        if(err) {console.log(err);}
        else {res.json(book);}
    })
});

router.put('/:_id', function(req, res) {
    let id = req.params._id;
    let book = req.body;
    Book.updateBook(id, book, {}, (err, book) => {
        if(err) {console.log(err);}
        else {res.json(book);}
    })
});

router.delete('/:_id', function(req, res) {
    let id = req.params._id;
    Book.deleteBook(id, (err, book) => {
        if(err) {console.log(err);}
        else {res.json(book);}
    })
});

module.exports = router;
