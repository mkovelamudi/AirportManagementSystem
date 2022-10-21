const express = require('express')
const router = express.Router()

const flightScheduleControllers = require('../controller/flightScheduleController');

const loginController = require('../controller/loginController');

const availableGates = require('../controller/occupiedGatesBeltsController');


router.get('/flightScheduleDetails', flightScheduleControllers.getFlightSchedule)

router.post('/login', loginController.logIn)

router.post('/availableGates', availableGates.getAvailableGateBelt)

router.post('/postData',availableGates.pushData)

router.post('/updateflightScheduleGate', flightScheduleControllers.updateFlightSchedule)

module.exports = router;