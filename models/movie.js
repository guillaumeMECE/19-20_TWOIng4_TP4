
const { Schema, model } = require('mongoose');

const name = 'Movie';

// TODO: ObjectID check type for userID & questionID
const attributes = {

    Title: { type: String },
    Year: { type: Number },
    Runtime: { type: String },
    Actors: { type: [String] },
    Poster: { type: String },
    BoxOffice: { type: String },
    imdbRating: { type: Number }

};

const options = {};

const MovieSchema = new Schema(attributes, options);

const MovieModel = model(name, MovieSchema);

module.exports = MovieModel;
