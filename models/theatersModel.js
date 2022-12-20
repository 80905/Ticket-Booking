const { Schema, model } = require("mongoose");

const theaterSchema = Schema({
  theaterName: {
    type: String,
    required: true,
  },
  location: {
    localAddress: String,
    city: String,
    district: String,
    state: String,
    pinCode: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Theater = model("Theater", theaterSchema);
module.exports = Theater;
