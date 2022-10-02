const express = require('express')
const router = express.Router()

const flightScheduleControllers = require('../controller/flightScheduleController');

//console.log("Hi")

router.get('/getDetails', flightScheduleControllers.getFlightSchedule)

module.exports = router;