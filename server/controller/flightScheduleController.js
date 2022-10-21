// const express = require('express');
// const mongoose = require('mongoose');

const userModel = require('../models/ScheduledFlight')

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
        
        await userModel.updateOne(myobject,  mybaggage);

        return res.status(200).send('Updated Successfully')

    }

    catch(error){
        return res.status(500).send("Server error")
    }
}
