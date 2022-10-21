// const express = require('express');
// const mongoose = require('mongoose');

const userModel = require('../models/ScheduledFlight')
const userModelAvailabe = require('../models/occupiedGates&Belts')

exports.getFlightSchedule = async (req,res) => {
    try{
        console.log('OK')
        const data = await userModel.find();
        if (data){
        return res.json(data)}
        return res.json({})
        
    }
    catch(error){
        console.log(error)
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

        // enddate the record 
        await userModelAvailabe.updateOne(myobjectavailable, {$set: {endTime: data.startTime}})

        //create a newrecord
        console.log(baggage)
        const newdata = new userModelAvailabe({
            object_id: object_id,
            terminal: data.terminal,
            gate: data.gate,
            belt: baggage,
            startTime: data.startTime,
            endTime: new Date(data.startTime.getTime() + 60 * 60000)
        })


        console.log(newdata)
        const datasave = await newdata.save()


        return res.status(200).send('Updated Successfully')

    }

    catch(error){
        return res.status(500).send("Server error")
    }
}
