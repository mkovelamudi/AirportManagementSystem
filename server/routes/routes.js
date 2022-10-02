const express = require('express');
const router = express.Router();
const Model = require('../models/ScheduledFlight')
const Model1 = require('../models/SignupSchema')


router.get('/employeeTab', async (req,res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        console.log(error)
    }
})

router.post('/post', async (req,res) => {
    console.log('Entered')
    const data = new Model({flightNumber:req.body.flightNumber,
                            airline:req.body.airline,
                            departs:req.body.departs,
                            arrives:req.body.arrives,
                            departure:req.body.departure,
                            arrival:req.body.arrival,
                            gate:req.body.gate,
                            terminal:req.body.terminal})
    try{
    const dataToSave = data.save()
    res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router;