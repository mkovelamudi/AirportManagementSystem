import react, { Component, useEffect, useState } from "react";
import "./FlightSchedules.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import ScheduleTable from "./ScheduleTable";

function FlightSchedules(props) {
  const [timeFrame, setTimeFrame] = useState();
  const handleSelect = (event) => {
    console.log(event.target.value);
    setTimeFrame(event.target.value);
  };
  const scheduleTableNames = {
    "Flight No": "flightNumber",
    Airline: "airline",
    From: "arrivingFrom",
    To: "departingTo",
    Departs: "departs",
    Arrives: "arrives",
    Terminal: "terminal",
    Gate: "gate",
    "Baggage Collection": "baggageCollection",
  };
  return (
    <div className="search-Flight">
      <div className=" flightSearch">
        <label for="flightsFromSearch" class="Flight-from">
          <span>Flights </span> <span>from : </span>
        </label>
        <input
          id="flightsFromSearch"
          className="Flight-textbox"
          type="text"
          placeholder="HYD"
          // value=""
        />
        {/* </div>
        <div class=" flightSearch"> */}

        <label for="flightsToearch" className="Flight-to">
          <span>To :</span>
        </label>
        <input
          id="flightsToSearch"
          className="Flight-textbox"
          type="text"
          placeholder="SFO"
          // value=""
        />
        <button className="button"> Reset</button>
      </div>

      <div className="timeFrame">
        {" "}
        Time :{" "}
        <select
          id="timeFrame"
          onChange={(e) => {
            handleSelect(e);
          }}
        >
          <option value="1"> Next 1 hrs</option>
          <option value="2"> Next 2 hrs</option>
          <option value="4"> Next 4 hrs</option>
        </select>
      </div>

      {/* <ScheduleTable tableNames={scheduleTableNames} /> */}
    </div>
  );
}

export default FlightSchedules;
