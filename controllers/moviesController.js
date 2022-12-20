const Movie = require("../models/moviesModel");

exports.addMovie = async (req, res, next) => {
  try {
    const addMovie = await Movie.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Movie added successfully",
      data: {
        movie: addMovie,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getMovie = async (req, res, next) => {
  try {
    let { searchKey } = req.body.filters;

    let regex = { $regex: searchKey, $options: "$i" };

    let searchQuery = {
      $or: [{ movieName: regex }, { location: regex }],
    };

    let Query = {};

    Query = {
      ...(searchKey && searchQuery),
    };

    const movie = await Movie.aggregate([
      {
        $match: Query,
      },
    ]);

    if (movie.length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "Match not found!",
      });
    }
    res.status(200).json({
      status: "success",
      results: movie.length,
      data: {
        data: movie,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
