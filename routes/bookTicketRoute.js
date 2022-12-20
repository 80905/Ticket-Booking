const { Router } = require("express");

const router = Router();

const {
  getDetails,
  bookTicket,
  updateBooking,
} = require("../controllers/bookTikcetController");

router.get("/get", getDetails);
router.post("/", bookTicket);
router.patch("/update/:id", updateBooking);

module.exports = router;
