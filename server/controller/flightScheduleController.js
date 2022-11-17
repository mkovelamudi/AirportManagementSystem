const userModelScheduledFlights = require("../models/ScheduledFlight");
const userModelAvailabe = require("../models/occupiedGates&Belts");
const moment = require("moment");
const utilLogic = require("../Util/util");

exports.getFlightSchedule = async (req, res) => {
  try {
    const date = moment(req.body.date).format("YYYY-MM-DD");

    var startDate = moment(new Date()).format("YYYY-MM-DD");
    var endDate = moment(startDate, "YYYY-MM-DD")
      .add(1, "days")
      .format("YYYY-MM-DD");

    if (date) {
      startDate = new Date(date);
      endDate = new Date(new Date(date).getTime() + 1000 * 86400);
    }
    const data1 = await userModelScheduledFlights.find({
      arrives: { $gte: startDate, $lt: endDate },
      type: "arrival",
    });
    const data2 = await userModelScheduledFlights.find({
      departs: { $gte: startDate, $lt: endDate },
      type: "departure",
    });

    if (data1 || data2) {
      return res.json(data1.concat(data2));
    }
    return res.json({});
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

exports.updateFlightSchedule = async (req, res) => {
  try {
    var myobject = { _id: req.body.object_id };
    var mybaggage = { $set: { baggageCollection: req.body.baggageCollection } };

    //Update the belt in scheduledFlights
    await userModelScheduledFlights.updateOne(myobject, mybaggage);

    return res.status(200).send("Updated Successfully");
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

exports.pushNewScheduleFlights = async (req, res) => {
  try {
    object_id = req.body.id;
    flightNumber = req.body.flightNumber;
    airline = req.body.airline;
    departs = req.body.departs;
    arrives = req.body.arrives;
    arrivingFrom = req.body.arrivingFrom;
    departingTo = req.body.departingTo;

    if (object_id) {
      await userModelScheduledFlights.updateOne(
        { _id: object_id },
        {
          $set: {
            flightNumber: flightNumber,
            airline: airline,
            departs: moment(departs).subtract(8, "hours"),
            arrives: moment(arrives).subtract(8, "hours"),
            arrivingFrom: arrivingFrom,
            departingTo: departingTo,
          },
        }
      );

      return res.status(200).json("Updated Successfully");
    } else {
      if (airline == "Qatar Airways") {
        terminal = "T1";
      } else if (airline == "Emirates") {
        terminal = "T2";
      } else if (airline == "Air India") {
        terminal = "T3";
      }

      if (departingTo == "San Jose") {
        type = "arrival";
        belt = await utilLogic.getGateBelt(arrives, terminal, "belt");
        belt = belt[0];
        departingTo = "";
      } else if (arrivingFrom == "San Jose") {
        type = "departure";
        belt = "";
        arrivingFrom = "";
      }
      gate = await utilLogic.getGateBelt(arrives, terminal, "gate");

      const dataScheduleFlights = new userModelScheduledFlights({
        type: type,
        flightNumber: flightNumber,
        airline: airline,
        departs: moment(departs).subtract(8, "hours"),
        arrives: moment(arrives).subtract(8, "hours"),
        departingTo: departingTo,
        arrivingFrom: arrivingFrom,
        gate: gate[0],
        terminal: terminal,
        baggageCollection: belt,
      });
      //console.log(dataScheduleFlights)
      const dataSave = await dataScheduleFlights.save();
      return res.status(200).json("Inserted Successfully");
    }
  } catch (err) {
    return res.status(500).send("Server error");
  }
};

exports.getAirlineFlights = async (req, res) => {
  try {
    console.log(req)
    const email = req.body.airline;
    
    const flights = await userModelScheduledFlights.find({airline:email});
    
    if(flights){
      return res.json(flights);
    }
    return res.json({});

  } catch (error) {
    return res.status(500).send("Server error");
  }
};
