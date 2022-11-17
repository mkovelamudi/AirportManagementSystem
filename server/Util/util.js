const userModel = require("../models/occupiedGates&Belts");
const userModelTerminal = require("../models/terminalGatesSchema");
const userModelGateState = require("../models/gateStateSchema");
const userModelScheduledFlights = require("../models/ScheduledFlight");
const moment = require("moment");

exports.getGateBelt = async (resDate, resTerminal, type) => {
  try {
    startTime = moment(resDate).format();
    endTime = moment(resDate).add(1, "hour");
    const occupiedData = await userModelScheduledFlights.find({
      $or: [
        { arrives: { $gte: endTime, $lte: startTime } },
        {
          startTime: {
            $gte: "arrives",
            $lte: moment("arrives").add(1, "hour"),
          },
        },
      ],
      terminal: resTerminal,
    });

    const terminalData = await userModelTerminal.find({
      terminal: resTerminal,
    });
    const gateState = await userModelGateState.find({
      status: "Inactive",
      terminal: resTerminal,
    });

    temp = [];
    if (type == "gate") {
      for (let i = 0; i < occupiedData.length; i++) {
        temp.push(occupiedData[i].gate);
      }
      for (let i = 0; i < gateState.length; i++) {
        temp.push(gateState[i].gate);
      }
      diff = terminalData[0].gate.filter((x) => !temp.includes(x));
    } else if (type == "belt") {
      for (let i = 0; i < occupiedData.length; i++) {
        temp.push(occupiedData[i].baggageCollection);
      }
      diff = terminalData[0].belt.filter((x) => !temp.includes(x));
    }
    return diff;
  } catch (err) {
    return "server error";
  }
};
