const userModel = require('../models/occupiedGates&Belts');
const userModelTerminal = require('../models/terminalGatesSchema');


exports.getAvailableGateBelt = async (req, res) => {

    try{
        resDate = req.body.date
        resTerminal = req.body.terminal
        type = req.body.type
        const occupiedData = await userModel.find({"endTime":{$gte : resDate}, "startTime":{$lte : resDate} })
        const terminalData = await userModelTerminal.find({'terminal':resTerminal})
        if(type == 'gate'){
            temp = []
            occupiedData.forEach(element => {
            temp.push(element.gate)
            })
            diff = (terminalData[0].gate).filter(x => !temp.includes(x))
            return res.json(diff)
        }
        else if(type == 'belt'){
            temp = []
            occupiedData.forEach(element => {
                temp.push(element.belt)
                })
            diff = (terminalData[0].belt).filter(x => !temp.includes(x))
            return res.json(diff)
        }
        
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