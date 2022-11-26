const userModel = require("../models/occupiedGates&Belts");
const userModelTerminal = require("../models/terminalGatesSchema");
const userModelGateState = require("../models/gateStateSchema");
const userModelScheduledFlights = require("../models/ScheduledFlight");
const moment = require("moment");

exports.getGateBelt = async (resDate, resTerminal, type) => {
  try {
    
    startTime = resDate
    endTime = moment(startTime).add(1, "hour");
    console.log( startTime, new Date(endTime), endTime)
    const occupiedData = await userModelScheduledFlights.find({arrives: { $gte :startTime, $lt: new Date(endTime)}, terminal: resTerminal});

    console.log(occupiedData)
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
