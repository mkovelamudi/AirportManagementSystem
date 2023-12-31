const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduledFlight = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    flightNumber: {
      type: String,
      required: true,
    },
    airline: {
      type: String,
      required: true,
    },
    departs: {
      type: Date,
      required: true,
    },
    arrives: {
      type: Date,
      required: true,
    },
    departingTo: {
      type: String,
    },
    arrivingFrom: {
      type: String,
    },
    gate: {
      type: String,
      required: true,
    },
    terminal: {
      type: String,
      required: true,
    },
    baggageCollection: {
      type: String,
    },
  },
  { timestamps: true }
);

const SchFlight = mongoose.model("scheduledFlight", scheduledFlight);

module.exports = SchFlight;
