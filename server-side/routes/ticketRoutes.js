const express = require("express");
const {
  createTicket,
  updateTicket,
  listTickets,
} = require("../controllers/ticketControllers");

const router = express.Router();

router.post("/", createTicket);
router.put("/:id", updateTicket); //Change to use 'patch' would be more secure.
router.get("/", listTickets);

module.exports = router;
