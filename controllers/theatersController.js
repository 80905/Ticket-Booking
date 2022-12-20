const Theater = require("../models/theatersModel");

exports.addTheater = async (req, res, next) => {
  try {
    console.log(req.body);
    const addTheater = await Theater.create(req.body);
    console.log({ addTheater });
    res.status(201).json({
      status: "success",
      message: "Theater added successfully",
      data: {
        theater: addTheater,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getTheater = async (req, res, next) => {
  try {
    let { searchKey } = req.body.filters;

    let regex = { $regex: searchKey, $options: "$i" };

    let searchQuery = {
      $or: [
        { theaterName: regex },
        { "location.city": regex },
        { "location.state": regex },
      ],
    };

    let Query = {};

    Query = {
      ...(searchKey && searchQuery),
    };

    const theater = await Theater.aggregate([
      {
        $match: Query,
      },
    ]);

    if (theater.length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "Match not found!",
      });
    }
    res.status(200).json({
      status: "success",
      results: theater.length,
      data: {
        data: theater,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
