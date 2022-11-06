const userModel = require('../models/occupiedGates&Belts');
const userModelTerminal = require('../models/terminalGatesSchema');
const utilLogic = require('../Util/util');
const userModelGateState = require('../models/gateStateSchema');

exports.getAvailableGatesBelts = async (req, res) => {

    try{
        resDate = req.body.date
        resTerminal = req.body.terminal
        type = req.body.type
        const getGateBeltData = await utilLogic.getGateBelt(resDate, resTerminal, type)

        if(getGateBeltData == 'server error'){
            return res.status(500).send("Server error")
        }
        return res.json(getGateBeltData)
        
    }
    catch(err){
        return res.status(500).send("Server error")
    }
}

exports.pushData = async (req, res) => {
    const data = new userModel({
        terminal : req.body.terminal,
        gate : req.body.gate,
        belt : req.body.belt,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    })
    try{    
        const dataSave = await data.save()
        return res.status(200).json(dataSave)
    }
    catch(err){
        return res.status(500).send("Server error")
    }
}