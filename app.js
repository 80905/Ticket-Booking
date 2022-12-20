const express = require("express");
const app = express();

app.use(express.json());

const theaterRouter = require("./routes/theatersRoute");
const movieRouter = require("./routes/moviesRoute");
const showRouter = require("./routes/showsRoute");
const bookTicketRouter = require("./routes/bookTicketRoute");

app.use("/api/v1/theater", theaterRouter);
app.use("/api/v1/movie", movieRouter);
app.use("/api/v1/show", showRouter);
app.use("/api/v1/book-ticket", bookTicketRouter);

module.exports = app;
