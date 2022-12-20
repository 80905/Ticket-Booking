const mongoose = require("mongoose");

const bookTicketSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.ObjectId,
    ref: "Movie",
  },
  theater: {
    type: mongoose.Schema.ObjectId,
    ref: "Theater",
  },
  show: {
    type: mongoose.Schema.ObjectId,
    ref: "Show",
  },
  createdAt: {
    type: Date,
    dafault: Date.now,
  },
});

const BookTicket = mongoose.model("BookTicket", bookTicketSchema);
module.exports = BookTicket;
