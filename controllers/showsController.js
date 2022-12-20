const Show = require("../models/showsModel");

exports.addShow = async (req, res, next) => {
  try {
    const addShow = await Show.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Show added successfully",
      data: {
        show: addShow,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getShow = async (req, res, next) => {
  try {
    const getShow = await Show.find();
    res.status(200).json({
      status: "success",
      results: getShow.length,
      data: {
        show: getShow,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
