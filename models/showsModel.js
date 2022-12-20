const { Schema, model } = require("mongoose");

const showSchema = Schema({
  showTime: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Show = model("Show", showSchema);
module.exports = Show;
