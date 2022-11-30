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
    
  });  
  }, []);
  const [searchData, setSearchData] = useState(null);
  const Search = (e) => {
    setSearchData(e.target.value);
    console.log(e.target.value + "inside set search")
  };
  return (
    <>
    <div className="AirportEmployee container-fluid">
        <div className="banner-management">
            <h1 className="banner-heading">Airline Management Console</h1>
        </div>

        <div className="radio_search">
      <input type="text" className="search" placeholder="Search.." onChange={(e)=>Search(e)}></input>
      </div>
      
       {flights!=null&& <AddDeleteTableRows flights={flights} searchData={searchData} />}
      
    </div>
    
        
    </>
  );
}

export default AirlineEmployeeDash;
