const userModelGateState = require("../models/gateStateSchema");
const userModelScheduledFlights = require("../models/ScheduledFlight");
const userModelAvailableGates = require("../models/occupiedGates&Belts");
const userModelTerminal = require("../models/terminalGatesSchema");
const utilLogic = require("../Util/util");
const moment = require("moment");

exports.allGateStatus = async (req, res) => {
  try {
    const data = await userModelGateState.find();

    if (data) {
      return res.json(data);
    }
    return res.json({});
  } catch (err) {
    return res.status(500).send("Server error");
  }
};

exports.updateGateState = async (req, res) => {
  try {
    const object_id = req.body.id;
    const resTerminal = req.body.terminal;
    const resGate = req.body.gate;
    const state = req.body.state;
    var currentDate = moment(new Date()).format("YYYY-MM-DD");

    await userModelGateState.updateOne(
      { _id: object_id },
      { $set: { status: state } }
    );

    const scheduleData = await userModelScheduledFlights.findOne({
      terminal: resTerminal,
      gate: resGate,
    });

    if (scheduleData) {
      const avaialbleGates = await utilLogic.getGateBelt(
        scheduleData.departs,
        scheduleData.terminal,
        "gate"
      );
      await userModelScheduledFlights.update(
        {
          terminal: resTerminal,
          gate: resGate,
          arrives: { $gte: currentDate },
        },
        { $set: { gate: avaialbleGates[0] } }
      );
    }

    return res.status(200).send("Updated SuccessFully");
  } catch (err) {
    return res.status(500).send("Server error");
  }
};
