const express = require("express");
const router = express.Router();

const flightScheduleControllers = require("../controller/flightScheduleController");

const loginController = require("../controller/loginController");

const availableGates = require("../controller/occupiedGatesBeltsController");

const gateStateController = require("../controller/gateStateController");

router.post(
  "/flightScheduleDetails",
  flightScheduleControllers.getFlightSchedule
);

router.post("/login", loginController.logIn);

router.post("/availableGatesBelts", availableGates.getAvailableGatesBelts);

router.post("/postData", availableGates.pushData);

router.post(
  "/updateflightScheduleGate",
  flightScheduleControllers.updateFlightSchedule
);

router.get("/getairlineflights", flightScheduleControllers.getAirlineFlights)

router.get("/allGateStatus", gateStateController.allGateStatus);

router.post("/updateGatestate", gateStateController.updateGateState);

router.post(
  "/pushScheduledFlights",
  flightScheduleControllers.pushNewScheduleFlights
);

module.exports = router;
