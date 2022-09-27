import React, { Component, useEffect,useState } from "react";
import Redirect from "../Routes/Redirect";
import { useNavigate } from "react-router-dom";
import TableC from "./../Table/TableC";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./AirportEmployee.css";
import CustomeTable from "../Table/CustomTable";
import EmployeeTabs from "./EmployeeTabs";
function AirportEmployeeDash() {
  const navigate = useNavigate();


  

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    console.log(auth);
    if (auth && auth.employees[0].isLogged) {
    } else {
      navigate("/Login");
    }
  }, []);
  return (
    <>
      <div className="AirportEmployee container-fluid">
        <div className="banner-management">
            <h1 className="banner-heading">Airport Management Console</h1>
        </div>
        <EmployeeTabs/>
       

        <div className="AirportEmployee-Table container-fluid">
            
            {/* <CustomeTable/> */}
          {/* <TableC /> */}
        </div>
      </div>
    </>
  );
}

export default AirportEmployeeDash;
