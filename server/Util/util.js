const userModel = require("../models/occupiedGates&Belts");
const userModelTerminal = require("../models/terminalGatesSchema");
const userModelGateState = require("../models/gateStateSchema");
const userModelScheduledFlights = require("../models/ScheduledFlight");
const moment = require("moment");

exports.getGateBelt = async (resDate, resTerminal, type) => {
  try {
    console.log(resDate)

   
    startTime = moment(resDate).subtract(8,'hours')
    

    endTime = moment(startTime).add(1, "hour");
    console.log( new Date(startTime), new Date(endTime))

    
     
    var occupiedDataArrives = await userModelScheduledFlights.find({arrives: { $gte :new Date(startTime), $lt: new Date(endTime)}, terminal: resTerminal});
    
    var occupiedDataDeparts = await userModelScheduledFlights.find({departs: { $gte :new Date(startTime), $lte: new Date(endTime)}, terminal: resTerminal});
    
    var occupiedData = occupiedDataDeparts.concat(occupiedDataArrives)
    
    //console.log(occupiedData)
    
    const allData = await userModelScheduledFlights.find()
    

    for(let i=0; i< allData.length; i++){
      tempStart = allData[i].arrives
      tempEnd = moment(tempStart).add(1,'hour')
      startTime = new Date(startTime)
      if(startTime <= tempEnd && startTime >= tempStart && allData[i].type == 'arrival'){
        occupiedData.push(allData[i])
      }
    }

    for(let i=0; i< allData.length; i++){
      tempStart = allData[i].departs
      tempEnd = moment(tempStart).add(1,'hour')
      startTime = new Date(startTime)
      if(startTime <= tempEnd && startTime >= tempStart && allData[i].type == 'departure'){
        occupiedData.push(allData[i])
      }
    }

    console.log(occupiedData.length)
    //console.log(occupiedData.length)
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
    console.log(err)
    return "server error";
  }
};
