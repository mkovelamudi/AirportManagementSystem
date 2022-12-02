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
  //console.log(1)
  try {
    const object_id = req.body.id;
    const resTerminal = req.body.terminal;
    const resGate = req.body.gate;
    const state = req.body.state;
    
    await userModelGateState.updateOne(
      { _id: object_id },
      { $set: { status: state } }
    );
    
    const scheduleData = await userModelScheduledFlights.findOne({
      terminal: resTerminal,
      gate: resGate,
    });
    
    var avaialbleGates;
    //console.log(scheduleData)
    if (scheduleData && state == 'Inactive') {
        if(scheduleData.type == 'arrival'){
          const tempDate = moment(scheduleData.arrives).add(8,'hours')
          //console.log(tempDate, scheduleData.arrives)
          avaialbleGates = await utilLogic.getGateBelt(tempDate,scheduleData.terminal,"gate");
        }
        else if(scheduleData.type == 'departure'){
          const tempDate = moment(scheduleData.departs).add(8,'hours')
          avaialbleGates = await utilLogic.getGateBelt(tempDate,scheduleData.terminal,"gate");
        }
        //console.log(avaialbleGates, avaialbleGates[0])
        
        const temp = await userModelScheduledFlights.updateOne({_id: scheduleData._id},{ $set: { gate: avaialbleGates[0] } });
    }

    return res.status(200).send("Updated SuccessFully");
  } catch (err) {
    return res.status(500).send("Server error");
  }
};
