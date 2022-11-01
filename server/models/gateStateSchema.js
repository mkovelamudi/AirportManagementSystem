const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gateState = new Schema(
  {
    terminal: {
      type: String,
      required: true,
    },
    gate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const gateStatusInfo = mongoose.model("GateState", gateState);

module.exports = gateStatusInfo;
