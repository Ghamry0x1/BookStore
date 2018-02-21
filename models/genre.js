const mongoose = require('mongoose');

let genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

let Genre = module.exports = mongoose.model('Genre', genreSchema);

module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit);
};

module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback);
};

module.exports.updateGenre = (id, genre, options, callback) => {
    let query = {_id: id};
    let update = {
        name: genre.name
    };
    Genre.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteGenre = (id, callback) => {
    let query = {_id: id};
    Genre.remove(query, callback);
};