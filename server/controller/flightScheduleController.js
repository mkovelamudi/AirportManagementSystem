// const express = require('express');
// const mongoose = require('mongoose');
const userModel = require('../models/ScheduledFlight')
const userModelAvailabe = require('../models/occupiedGates&Belts')
const moment = require('moment')
exports.getFlightSchedule = async (req,res) => {

    try{
        const date = moment(req.body.date).format('YYYY-MM-DD');
        
        var startDate = moment(new Date()).format('YYYY-MM-DD')
        var endDate =  moment(startDate, 'YYYY-MM-DD').add(1,'days').format('YYYY-MM-DD')

        if(date){
            console.log(2)
            startDate = new Date(date)
            endDate = new Date(new Date(date).getTime() + 1000 * 86400)
        }
        const data1 = await userModel.find({"arrives": {$gte : startDate, $lt: endDate}, "type":"arrival"});
        const data2 = await userModel.find({"departs": {$gte : startDate, $lt: endDate}, "type":"departure"});
            
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
        const object_id = req.body.object_id
        const baggage = req.body.baggageCollection;

        var myobject = {_id:object_id}
        var mybaggage = {$set: {baggageCollection: baggage}}
        var myobjectavailable = {object_id: object_id}

        //Update the belt in scheduledFlights
        await userModel.updateOne(myobject,  mybaggage);

        // Get the belt allocated to that particular gate
        const data = await userModelAvailabe.findOne(myobjectavailable)

        var endDateValue = {$set : {object_id: "", endTime: new Date(data.startTime.getTime() - 1)} }
        // enddate the record 
        await userModelAvailabe.updateOne(myobjectavailable, endDateValue)

        //create a newrecord
        const newdata = new userModelAvailabe({
            object_id: object_id,
            terminal: data.terminal,
            gate: data.gate,
            belt: baggage,
            startTime: data.startTime,
            endTime: new Date(data.startTime.getTime() + 60 * 60000)
        })
        const datasave = await newdata.save()
        
        await userModel.updateOne(myobject,  mybaggage);

        return res.status(200).send('Updated Successfully')

    }

    catch(error){
        return res.status(500).send("Server error")
    }
}
