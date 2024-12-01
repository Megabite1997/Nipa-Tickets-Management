const express = require("express");
const {
  createTicket,
  updateTicket,
  listTickets,
} = require("../controllers/ticketControllers");

const router = express.Router();

router.post("/", createTicket);
router.put("/:id", updateTicket);
router.get("/", listTickets);

module.exports = router;
