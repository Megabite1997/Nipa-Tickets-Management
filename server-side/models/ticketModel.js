const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  contact_information: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "accepted", "resolved", "rejected"],
    default: "pending",
  },
});

ticketSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id; // Rename _id to id
    delete ret._id; // Remove _id
    delete ret.__v; // Remove __v
    return ret;
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
