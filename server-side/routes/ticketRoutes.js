const express = require("express");
const {
  createTicket,
  updateTicket,
  listTickets,
} = require("../controllers/ticketControllers");

const router = express.Router();

router.post("/", createTicket); // Create a ticket
router.put("/:id", updateTicket); // Update a ticket
router.get("/", listTickets); // List and filter tickets

module.exports = router;
