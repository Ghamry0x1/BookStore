const express = require('express');
const router = express.Router();
Genre = require('../models/genre');

router.get('/', function(req, res) {
    Genre.getGenres((err, genres) => {
        if(err) {console.log(err);}
        else {res.json(genres);}
    })
});

router.post('/', function(req, res) {
    let genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if(err) {console.log(err);}
        else {res.json(genre);}
    })
});

router.put('/:_id', function(req, res) {
    let id = req.params._id;
    let genre = req.body;
    Genre.updateGenre(id, genre, {}, (err, genre) => {
        if(err) {console.log(err);}
        else {res.json(genre);}
    })
});

router.delete('/:_id', function(req, res) {
    let id = req.params._id;
    Genre.deleteGenre(id, (err, genre) => {
        if(err) {console.log(err);}
        else {res.json(genre);}
    })
});

module.exports = router;
