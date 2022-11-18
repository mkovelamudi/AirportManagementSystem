import React, { Component, useEffect,useState } from "react";
import Redirect from "../Routes/Redirect";
import { useNavigate, useParams } from "react-router-dom";
import TableC from "./../Table/TableC";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./AirlineEmployee.css";
import AddDeleteTableRows from "./AddDeleteTableRows";
import axios from "axios";

function AirlineEmployeeDash() {
  const navigate = useNavigate();
  const [flights,setflights]=useState();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    console.log("Airline Employee")
    console.log(auth)
    if (auth && auth.employees[0].isLogged) {
    } else {
      navigate("/Login");
    }
    var email = auth.employees[0].userName.split('@')[1].split(".")[0];
    var airline = "";
    switch (email) {
      case "qatar":
        airline = "Qatar Airways";
        break;
      case "emirates":
        airline = "Emirates";
        break;
      case "airindia":
        airline = "Air India";
        break;
      default:
        airline = email;
        break;
    }
    console.log(airline)
    axios.post('/all/getairlineflights',{airline:airline}).then((res)=>{
      console.log("fetched data from API")
      console.log(res.data)
      setflights(res.data)
      console.log(flights)
    
  })
  
  }, []);
  return (
    <>
    <div className="AirportEmployee container-fluid">
        <div className="banner-management">
            <h1 className="banner-heading">Airline Management Console</h1>
        </div>

        <div className="radio_search">
        <label class="airline_radio">
            Arrival
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
        </label>
        <label class="airline_radio">
            Departure
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
        </label>
      <input type="text" className="search" placeholder="Search.."></input>
      </div>
      
        {/* <tr className="airline_row">
        <th>Flight Number</th>
        <th>Source</th>
        <th>Destination</th>
        <th>Terminal</th>
        <th>Gate</th>
        <th>Status</th>
        <th>Actions</th>
        </tr>
        <tr className="airline_row">
        <td id="name_row1">Ankit</td>
        <td id="country_row1">India</td>
        <td id="age_row1">20</td>
        <td>
        <input type="button" id="edit_button1" value="Edit" class="edit" onclick="edit_row('1')"/>
        <input type="button" value="Delete" class="delete" onclick="delete_row('1')"/>
        </td>
        </tr> */}
       {flights!=null&& <AddDeleteTableRows flights={flights}  />}
      
    </div>
    
        
    </>
  );
}

export default AirlineEmployeeDash;
