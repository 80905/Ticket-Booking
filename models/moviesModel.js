const { Schema, model } = require("mongoose");

const movieSchema = Schema({
  movieName: {
    type: String,
    required: true,
  },
  cretaedAt: {
    type: Date,
    default: Date.now,
  },
});

const Movie = model("Movie", movieSchema);
module.exports = Movie;
