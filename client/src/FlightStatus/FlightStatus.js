// import React, { Component } from "react";
// import "./Flight.css";
// class FlightStatus extends Component {
//   state = {};
//   render() {
//     return (
//       <>
//         <div classname="flightStatus">
//           <form class="_filterBar_6uyzw_1">
//             <div class="_filterBarLine_6uyzw_5">
//               <div class="_radioColumnFilter_6uyzw_37">
//                 <div>
//                   <label for="flight_kind0">Departures</label>
//                   <input
//                     type="radio"
//                     id="flight_kind0"
//                     name="flight_kind"
//                     value="Departures"
//                     checked="true"
//                   />
//                 </div>
//                 <div>
//                   <label for="flight_kind1">Arrivals</label>
//                   <input
//                     type="radio"
//                     id="flight_kind1"
//                     name="flight_kind"
//                     value="Arrivals"
//                   />
//                 </div>
//               </div>
//               <div class="_globalFilter_6uyzw_11">
//                 <label for="flightsGlobalSearch" class="_filterLabel_6uyzw_46">
//                   Flight:{" "}
//                 </label>
//                 <input
//                   id="flightsGlobalSearch"
//                   type="text"
//                   placeholder="Airline, Departing To, Flight #"
//                   value=""
//                 />
//               </div>
//               {/* <div class="_selectColumnFilter_6uyzw_57 _sortingFilter_6uyzw_155">
//                 <label for="flightsSortBy" class="_filterLabel_6uyzw_46">
//                   Sort By:
//                 </label>
//                 <div class="form-type-select">
//                   <select name="flightsSortBy" id="flightsSortBy">
//                     <option value="scheduled_aod_time">Departure Time</option>
//                     <option value="airline.airline_name">Airline</option>
//                     <option value="airport.airport_name">Location</option>
//                   </select>
//                 </div>
//               </div> */}
//               <button class="_buttonReset_1rau0_46" type="reset">
//                 Reset Filters
//               </button>
//             </div>
//             {/* <button
//               aria-expanded="true"
//               aria-controls="additional-options"
//               class="_additionalFilters_6uyzw_71 active"
//             >
//               Additional Options
//               <span class="_plusButton_6uyzw_87 active"></span>
//             </button> */}
//             <div
//               class="_filterBarLine_6uyzw_5 _additionalFiltersSection_6uyzw_152"
//               id="additional-options"
//             >
//               <div>
//                 {/* <div class="_radioColumnFilter_6uyzw_37">
//                   <div>
//                     <label for="code_shares">Exclude Code Share Flights</label>
//                     <input
//                       type="checkbox"
//                       id="code_shares"
//                       name="code_shares"
//                     />
//                   </div>
//                 </div> */}
//               </div>
//               <div class="_airlineFilter_6uyzw_146">
//                 <div class="_selectColumnFilter_6uyzw_57">
//                   <label
//                     for="airline.airline_name"
//                     class="_filterLabel_6uyzw_46"
//                   >
//                     Preferred Airline
//                   </label>
//                   <div class="form-type-select">
//                     <select
//                       name="airline.airline_name"
//                       id="airline.airline_name"
//                     >
//                       <option value="">All Airlines</option>
//                       <option value="Adria Airways">Adria Airways</option>
//                       <option value="AEGEAN AIRLINES">AEGEAN AIRLINES</option>
//                       <option value="Aer Lingus">Aer Lingus</option>
//                       <option value="Aeroflot">Aeroflot</option>
//                       <option value="Aerolineas Argentinas">
//                         Aerolineas Argentinas
//                       </option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </form>

//         </div>
//       </>
//     );
//   }
// }

// export default FlightStatus; */

// import * as React from 'react';
import React, { Component, useEffect, useState } from "react";

import CustomeTable from "../Table/CustomTable";
import axios from "axios";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableC from "./../Table/TableC";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./Flight.css";
import { json } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EmployeeTabs() {
  const [value, setValue] = React.useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [FromAirport, setFromAirport] = useState(true);
  const [flightData, setFlightData] = useState();

  useEffect(() => {
    axios.get("/all/flightScheduleDetails").then((res) => {
      console.log(res);
      setFlightData(res.data);
    });
  }, []);

  //   const scheduleTableNames=["Flight No","Airline","From","To","Departs","Arrives","Terminal","Gate","Baggage Collection"]
  const scheduleTableNames = {
    "Flight No": "flightNumber",
    Airline: "airline",
    From: "arrival",
    To: "departingTo",
    Departs: "departs",
    Arrives: "arrives",
    Terminal: "terminal",
    Gate: "gate",
    "Baggage Collection": "baggageCollection",
  };
  const gateTableNames = ["Terminal", "Gate Number", "Status"];

  const tmpDepartures = {
    flightno: "avc",
    airline: "abc",
    from: "test1",
    to: "test2",
    departs: "00:00",
    arrives: "00:00",
    terminal: "1",
    gate: "A1",
    baggage: "2",
  };
  const tmpTerminal = { Terminal: "1", GateNumber: "A1", Status: "Open" };

  const jsonTmp = {};
  const tableListTmp = [];
  jsonTmp.tableListTmp = tableListTmp;

  jsonTmp.tableListTmp.push(tmpDepartures);

  const jsonTmp1 = {};
  const tableListTmp1 = [];
  jsonTmp1.tableListTmp = tableListTmp1;

  jsonTmp1.tableListTmp.push(tmpTerminal);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Flight Schedules" {...a11yProps(0)} />
          {/* <Tab label="Gate Management" {...a11yProps(1)} />
          <Tab label="Profile" {...a11yProps(2)} /> }
        </Tabs> */}
      </Box>
      <TabPanel value={value} index={0}>
        <div className="filters">
          <form class="_filterBar_6uyzw_1">
            <div class="_filterBarLine_6uyzw_5">
              <div class="_radioColumnFilter_6uyzw_37 radioButtons">
                <div>
                  <label for="flight_kind0">Departures</label>
                  <input
                    type="radio"
                    id="flight_kind0"
                    name="flight_kind"
                    value="FromAirport"
                    checked={FromAirport}
                    onClick={() => {
                      setFromAirport(true);
                    }}
                  />
                </div>
                <div>
                  <label for="flight_kind1">Arrivals</label>
                  <input
                    type="radio"
                    id="flight_kind1"
                    name="flight_kind"
                    value="ToAirport"
                    checked={!FromAirport}
                    onClick={() => {
                      setFromAirport(false);
                    }}
                  />
                </div>
              </div>

              {/* <button class="_buttonReset_1rau0_46" type="reset">
                Reset Filters
              </button> */}
            </div>

            {/* Flight Search */}
            <div className="search-date">
              <div class="_globalFilter_6uyzw_11 flightSearch">
                <label for="flightsGlobalSearch" class="_filterLabel_6uyzw_46">
                  Flight:{" "}
                </label>
                <input
                  id="flightsGlobalSearch"
                  className="flightSearchInput"
                  type="text"
                  placeholder="Airline, Departing To, Flight #"
                  // value=""
                />
              </div>
              <div class="_globalFilter_6uyzw_11 Date_Picker">
                <label for="flightsGlobalSearch" class="_filterLabel_6uyzw_46">
                  Date :{" "}
                </label>
                <DatePicker
                  style={{ width: "50%" }}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div></div>
            </div>

            {/* Preffered Airlines */}
            <div
              class="_filterBarLine_6uyzw_5 _additionalFiltersSection_6uyzw_152"
              id="additional-options"
            >
              <div></div>
              <div class="_airlineFilter_6uyzw_146">
                <div class="_selectColumnFilter_6uyzw_57">
                  <label
                    for="airline.airline_name"
                    class="_filterLabel_6uyzw_46"
                  >
                    Preferred Airline :{" "}
                  </label>
                  <div class="form-type-select">
                    <select
                      name="airline.airline_name"
                      id="airline.airline_name"
                    >
                      <option value="">All Airlines</option>
                      <option value="Adria Airways">Adria Airways</option>
                      <option value="AEGEAN AIRLINES">AEGEAN AIRLINES</option>
                      <option value="Aer Lingus">Aer Lingus</option>
                      <option value="Aeroflot">Aeroflot</option>
                      <option value="Aerolineas Argentinas">
                        Aerolineas Argentinas
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Table code for flight shedule */}
        <CustomeTable
          tableNames={scheduleTableNames}
          FromAirport={FromAirport}
          data={flightData}
          FlightDetails={true}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="GateManagement">
          <div
            class="_filterBarLine_6uyzw_5 _additionalFiltersSection_6uyzw_152"
            id="additional-options"
          >
            <div></div>
            <div class="_airlineFilter_6uyzw_146">
              <div class="_selectColumnFilter_6uyzw_57">
                <label for="airline.airline_name" class="_filterLabel_6uyzw_46">
                  Select Terminal
                </label>
                <div class="form-type-select">
                  <select name="airline.airline_name" id="airline.airline_name">
                    <option value="">All</option>
                    <option value="Adria Airways">Terminal 1</option>
                    <option value="AEGEAN AIRLINES">Terminal 2</option>
                    <option value="Aer Lingus">Terminal 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <CustomeTable
            tableNames={gateTableNames}
            FromAirport={false}
            data={jsonTmp1}
            FlightDetails={false}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
