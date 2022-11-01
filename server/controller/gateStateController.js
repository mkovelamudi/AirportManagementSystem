const userModel = require("../models/gateStateSchema");
const userModelSchedule = require("../models/ScheduledFlight");
const userModelAvailableGates = require("../models/occupiedGates&Belts");
const userModelTerminal = require("../models/terminalGatesSchema");
const commonLogic = require("../Util/util");

exports.activegatestate = async (req, res) => {
  try {
    const data = await userModel.find({ status: "Active" });

    if (data) {
      return res.json(data);
    }
    return res.json({});
  } catch (err) {
    return res.status(500).send("Server error");
  }
};

exports.updategatestate = async (req, res) => {
  try {
    const terminal = req.body.terminal;
    const gate = req.body.gate;
    const state = req.body.state;

    await userModel.updateOne(
      { terminal: terminal, gate: gate },
      { $set: { status: state } }
    );

    const scheduleData = await userModelSchedule.findOne({
      terminal: terminal,
      gate: gate,
    });

    if (scheduleData.type == "arrival") {
      const availableGates = await commonLogic(
        scheduleData.arrives,
        scheduleData.terminal,
        scheduleData.gate
      );
    } else if (scheduleData.type == "departure") {
      const availableGates = await commonLogic(
        scheduleData.departs,
        scheduleData.terminal,
        scheduleData.gate
      );
    }

    return res.status(200).send("Updated SuccessFully");
  } catch (err) {
    return res.status(500).send("Server error");
  }
};
