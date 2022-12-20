const BookTicket = require("../models/bookTicketModel");

exports.getDetails = async (req, res, next) => {
  try {
    const getDetails = await BookTicket.find()
      .populate("movie")
      .populate("theater")
      .populate("show");

    res.status(200).json({
      status: "success",
      data: {
        getDetails,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.bookTicket = async (req, res, next) => {
  try {
    const bookTicket = await BookTicket.create(req.body);

    console.log(bookTicket);

    res.status(201).json({
      status: "success",
      data: {
        bookTicket,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateBooking = async (req, res, next) => {
  try {
    console.log(req.params.id, req.body);
    const update = await BookTicket.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json({
      status: "success",
      message: "Your booking has been rescheduled",
    });
  } catch (error) {
    console.log(error);
  }
};
