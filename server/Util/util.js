const userModel = require('../models/occupiedGates&Belts');
const userModelTerminal = require('../models/terminalGatesSchema');
const userModelGateState = require('../models/gateStateSchema');
const userModelScheduledFlights = require('../models/ScheduledFlight');


exports.getGateBelt = async (resDate, resTerminal, type) =>{

    try{
        const occupiedData = await userModelScheduledFlights.find({"arrives":{$gte : resDate}, "departs":{$lte : resDate},"terminal":resTerminal})
        const terminalData = await userModelTerminal.find({'terminal':resTerminal})
        const gateState = await userModelGateState.find({"status":"Inactive", "terminal":resTerminal})
        
        temp = []
        if(type == 'gate'){
            for(let i=0; i< occupiedData.length; i++){
                temp.push(occupiedData[i].gate)
            }
            for(let i=0; i<gateState.length; i++){
                temp.push(gateState[i].gate)
            }
            diff = (terminalData[0].gate).filter(x => !temp.includes(x))
        }
        else if(type == 'belt'){
            for(let i=0; i< occupiedData.length; i++){
                temp.push(occupiedData[i].baggageCollection)
            }
            diff = (terminalData[0].belt).filter(x => !temp.includes(x))
        }
        return diff

    }
    catch(err){
        return "server error"
    }
}

