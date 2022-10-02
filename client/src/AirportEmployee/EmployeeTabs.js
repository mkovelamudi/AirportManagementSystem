// import * as React from 'react';
import React, { Component, useEffect,useState } from "react";

import CustomeTable from "../Table/CustomTable";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableC from "./../Table/TableC";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./AirportEmployee.css";

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export default function EmployeeTabs() {
  const [value, setValue] = React.useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [FromAirport,setFromAirport]=useState(true);

  const scheduleTableNames=["Flight No","Airline","From","To","Departs","Arrives","Terminal","Gate","Baggage Collection"]
  const gateTableNames=["Terminal","Gate Number","Status"]
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Flight Schedules" {...a11yProps(0)} />
          <Tab label="Gate Management" {...a11yProps(1)} />
          <Tab label="Profile" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="filters">
          <form class="_filterBar_6uyzw_1">
            <div class="_filterBarLine_6uyzw_5">
              <div class="_radioColumnFilter_6uyzw_37 radioButtons">
                <div>
                  <label for="flight_kind0">From Airport</label>
                  <input
                    type="radio"
                    id="flight_kind0"
                    name="flight_kind"
                    value="FromAirport"
                    checked={FromAirport}
                    onClick={()=>{setFromAirport(true);}}
                  />
                </div>
                <div>
                  <label for="flight_kind1">To Airport</label>
                  <input
                    type="radio"
                    id="flight_kind1"
                    name="flight_kind"
                    value="ToAirport"
                    checked={!FromAirport}
                    onClick={()=>{setFromAirport(false);}}
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
                  value=""
                />
              </div>
              <div class="_globalFilter_6uyzw_11 Date_Picker">
                <label for="flightsGlobalSearch" class="_filterLabel_6uyzw_46">
                  Date:{" "}
                </label>
                <DatePicker style={{ width:"50%"}}selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              <div>
              
              </div>
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
                    Preferred Airline
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
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Table code for flight shedule */}
        <CustomeTable tableNames={scheduleTableNames} FromAirport={FromAirport}/>

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
                  <label
                    for="airline.airline_name"
                    class="_filterLabel_6uyzw_46"
                  >
                    Select Terminal
                  </label>
                  <div class="form-type-select">
                    <select
                      name="airline.airline_name"
                      id="airline.airline_name"
                    >
                      <option value="">All</option>
                      <option value="Adria Airways">Terminal 1</option>
                      <option value="AEGEAN AIRLINES">Terminal 2</option>
                      <option value="Aer Lingus">Terminal 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <CustomeTable tableNames={gateTableNames} FromAirport={false}/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}