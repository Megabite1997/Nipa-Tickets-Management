const Ticket = require("../models/ticketModel.js");

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
      { new: true },
    );

    if (!updatedTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json(updatedTicket);
  } catch (err) {
    res.status(500).json({ message: "Error updating ticket", error: err });
  }
};

const listTickets = async (req, res) => {
  try {
    const {
      search = "",
      status,
      sortBy = "updatedAt",
      order = "desc",
      page = 1,
      limit = 10,
    } = req.query.params;

    const filter = {
      ...(status ? { status } : {}),
      ...(search ? { title: { $regex: search, $options: "i" } } : {}),
    };

    const sort = { [sortBy]: order === "asc" ? 1 : -1 };

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const skip = (pageNumber - 1) * limitNumber;

    const tickets = await Ticket.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limitNumber);

    const totalTickets = await Ticket.countDocuments(filter);

    res.status(200).json({
      data: tickets,
      meta: {
        total: totalTickets,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(totalTickets / limitNumber),
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving tickets", error: err });
  }
};

module.exports = {
  createTicket,
  updateTicket,
  listTickets,
};
