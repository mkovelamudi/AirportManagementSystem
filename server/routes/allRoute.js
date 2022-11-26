const express = require("express");
const router = express.Router();

const flightScheduleControllers = require("../controller/flightScheduleController");

const loginController = require("../controller/loginController");

const availableGates = require("../controller/occupiedGatesBeltsController");

const gateStateController = require("../controller/gateStateController");


//Flight Schedule API (GETDetails, Push and Update, Get Hourly Based)

router.post("/flightScheduleDetails",flightScheduleControllers.getFlightSchedule);

router.post("/pushScheduledFlights",flightScheduleControllers.pushNewScheduleFlights);

router.post("/updateflightScheduleGate",flightScheduleControllers.updateFlightSchedule);

router.post("/flightScheduleHourly", flightScheduleControllers.getFlightScheduleHourly);


//Login Authentication API
router.post("/login", loginController.logIn);


//Get Available Gates and Belts API
router.post("/availableGatesBelts", availableGates.getAvailableGatesBelts);


router.post("/getairlineflights", flightScheduleControllers.getAirlineFlights)

router.get("/allGateStatus", gateStateController.allGateStatus);

router.post("/updateGatestate", gateStateController.updateGateState);



router.post("/postData", availableGates.pushData);


module.exports = router;
