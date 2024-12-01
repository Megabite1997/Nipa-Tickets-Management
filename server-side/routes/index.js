const express = require("express");
const router = express.Router();

const ticketRoutes = require("./ticketRoutes");

router.use("/tickets", ticketRoutes);

module.exports = router;
