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
