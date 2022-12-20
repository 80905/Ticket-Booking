const { Router } = require("express");

const router = Router();

const { addTheater, getTheater } = require("../controllers/theatersController");

router.post("/add", addTheater);
router.get("/get", getTheater);

module.exports = router;
