const { Router } = require("express");

const router = Router();

const { addMovie, getMovie } = require("../controllers/moviesController");

router.post("/add", addMovie);
router.get("/get", getMovie);

module.exports = router;
