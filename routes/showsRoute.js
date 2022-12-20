const { Router } = require("express");

const router = Router();

const { addShow, getShow } = require("../controllers/showsController");

router.post("/add", addShow);
router.get("/get", getShow);

module.exports = router;
