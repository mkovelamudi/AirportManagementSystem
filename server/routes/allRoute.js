const express = require('express')
const router = express.Router()

const flightScheduleControllers = require('../controller/flightScheduleController');

const loginController = require('../controller/loginController');

const availableGates = require('../controller/occupiedGatesController');


router.get('/flightScheduleDetails', flightScheduleControllers.getFlightSchedule)

router.post('/login', loginController.logIn)

router.get('/availableGates', availableGates)

module.exports = router;