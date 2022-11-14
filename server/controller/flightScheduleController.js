const userModelScheduledFlights = require('../models/ScheduledFlight')
const userModelAvailabe = require('../models/occupiedGates&Belts')
const moment = require('moment')


exports.getFlightSchedule = async (req,res) => {

    try{
        const date = moment(req.body.date).format('YYYY-MM-DD');
        
        var startDate = moment(new Date()).format('YYYY-MM-DD')
        var endDate =  moment(startDate, 'YYYY-MM-DD').add(1,'days').format('YYYY-MM-DD')

        if(date){
            startDate = new Date(date)
            endDate = new Date(new Date(date).getTime() + 1000 * 86400)
        }
        const data1 = await userModelScheduledFlights.find({"arrives": {$gte : startDate, $lt: endDate}, "type":"arrival"});
        const data2 = await userModelScheduledFlights.find({"departs": {$gte : startDate, $lt: endDate}, "type":"departure"});
            
        if(data1 || data2){
            return res.json(data1.concat(data2))
            }
        return res.json({})
        }  
    catch(error){
        return res.status(500).send("Server error")
    }
}

exports.updateFlightSchedule = async (req, res) => {

    try {
        var myobject = {_id:req.body.object_id}
        var mybaggage = {$set: {baggageCollection: req.body.baggageCollection}}

        //Update the belt in scheduledFlights
        await userModelScheduledFlights.updateOne(myobject,  mybaggage);

        return res.status(200).send('Updated Successfully')
    }
    catch(error){
        return res.status(500).send("Server error")
    }
}

exports.getAirlineFlights = async (req,res) => {

    try{
       const email = "Qatar"

       const date = moment(req.body.date).format('YYYY-MM-DD');
        
        var startDate = moment(new Date()).format('YYYY-MM-DD')
        var endDate =  moment(startDate, 'YYYY-MM-DD').add(1,'days').format('YYYY-MM-DD')

        if(date){
            console.log(2)
            startDate = new Date(date)
            endDate = new Date(new Date(date).getTime() + 1000 * 86400)
        }
        const data1 = await userModel.find({"airline":email});
        
            
        if(data1){
            return res.json(data1)
            }
        return res.json({})
        }  
    catch(error){
        return res.status(500).send("Server error")
    }
}
