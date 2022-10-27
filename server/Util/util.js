const userModel = require('../models/occupiedGates&Belts')
const userModelTerminal = require('../models/terminalGatesSchema');


const commonLogic = async (resDate, resTerminal, type) =>{

    try{
        const occupiedData = await userModel.find({"endTime":{$gte : resDate}, "startTime":{$lte : resDate} })
        const terminalData = await userModelTerminal.find({'terminal':resTerminal})
        if(type == 'gate'){
            temp = []
            occupiedData.forEach(element => {
            temp.push(element.gate)
            })
            diff = (terminalData[0].gate).filter(x => !temp.includes(x))
            return diff
        }
        else if(type == 'belt'){
            temp = []
            occupiedData.forEach(element => {
                temp.push(element.belt)
                })
            diff = (terminalData[0].belt).filter(x => !temp.includes(x))
            return diff
        }
        
    }
    catch(err){
        return "server error"
    }
}

module.exports = commonLogic