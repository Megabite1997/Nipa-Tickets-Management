const Ticket = require("../models/ticketModel.js");

// Create a new ticket
const createTicket = async (req, res) => {
  try {
    const { title, description, contact_information } = req.body;
    const newTicket = new Ticket({ title, description, contact_information });
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (err) {
    res.status(500).json({ message: "Error creating ticket", error: err });
  }
};

// Update a ticket
const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, contact_information, status } = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(
      id,
      {
        title,
        description,
        contact_information,
        status,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json(updatedTicket);
  } catch (err) {
    res.status(500).json({ message: "Error updating ticket", error: err });
  }
};

// List and sort tickets
const listTickets = async (req, res) => {
  try {
    const { status, sortBy = "updatedAt", order = "desc" } = req.query;

    const filter = status ? { status } : {};
    const sort = { [sortBy]: order === "asc" ? 1 : -1 };

    const tickets = await Ticket.find(filter).sort(sort);
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving tickets", error: err });
  }
};

module.exports = {
  createTicket,
  updateTicket,
  listTickets,
};
