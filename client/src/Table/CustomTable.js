import React, { Component, useEffect, useState } from "react";
import "./CustomTable.css";
import axios from "axios";
import Dropdown from "./Dropdown";
//for snack bar
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import moment from "moment";

function CustomeTable(props) {
  const [options, setOptions] = useState(new Map());

  useEffect(() => {
    //setOptions(["3", "4", "5"]);
    console.log(props.searchData)
  }, []);


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        
      </IconButton>
    </React.Fragment>
  );

const handleStatusChange=(row,value)=>{
    console.log(row,value)
    axios.post('/all/updateGatestate',{
      id:row._id,
      terminal:row.terminal,
      gate:row.gate,
      state:value 
    }).then((res)=>{
      props.startUpCall()
      console.log(res)
      
  })
    // add api for the status change in the gate management tab of the airport employee
}

  const baggageChange=(e,x)=>{
    console.log("baggage changed")
    console.log(e.target.value)
    console.log(x._id)

    // axios call to update the availability
    axios.post('all/updateflightScheduleGate',{
       object_id: x._id,
       baggageCollection:e.target.value
    }).then((res)=>{
            handleClick()
            props.baggageChangeHandler()
        }
    )
    
  }


  const baggageSelect = (x,currValue) => {
    var time=x.arrives;
    var terminal=x.terminal;
    var Type="belt";
    axios
      .post("/all/availableGatesBelts", {
        date: time,
        terminal: terminal,
        type: Type,
      })
      .then((res) => {
        // console.log(res);
        let data=res.data;

        setOptions(new Map(options.set(x._id,data)));
      });
    

    // console.log(x);
  };
  return (
    <>
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Saved Succesfully"
        action={action}
      >
        
        </Snackbar>
      <table>
        <tr>
            {console.log(props.searchData)}
            
           
          {Object.keys(props.tableNames).map((x) => {
            if (
              props.FromAirport &&
              (x == "Arrives" || x == "From" || x == "Baggage Collection")
            ) {
            } else if (!props.FromAirport && (x == "Departs" || x == "To")) {
            } else return <th>{x}</th>;
          })}
        </tr>
        {console.log(props.tableNames)}
        {props.data && 
          props.data.filter((x)=>{
            x["Terminal"] && console.log(x["Terminal"])
            if(props.searchData==null || props.searchData=="All"){
                return x;
            }
           
            else{
                if((x["airline"] && x["airline"].toLowerCase().includes(props.searchData.toLowerCase())) || (x["flightNumber"] && x["flightNumber"].toLowerCase().includes(props.searchData.toLowerCase())) || ((x["terminal"] && x["terminal"]==props.searchData)))
                    return x;
            }
          }).map((x) => {
            const obj = x;
            console.log(!props.FromAirport);
            if (x["type"] == "arrival" && props.FromAirport) {
            } else if (x["type"] == "departure" && !props.FromAirport) {
            } else
              return (
                <tr key={x["_id"]}>
                  {Object.keys(props.tableNames).map((key) => {
                    if (
                      props.FromAirport &&
                      (key == "Arrives" ||
                        key == "From" ||
                        key == "Baggage Collection")
                    ) {
                    } 
                    else if (key=='Status'){
                        return(<td><Dropdown value={x[props.tableNames[key]]} row={x} handleStatusChange={handleStatusChange}/></td>)
                    }
                    else if (
                      !props.FromAirport &&
                      (key == "Departs" || key == "To")
                    ) {
                    } else if (key == "Baggage Collection") {
                      return (
                        <td>
                         { (props.type && props.type=="Airport") ? <select
                            
                            onClick={(e) => {
                              baggageSelect(obj,e.target.value);
                            }}
                            onChange={(e,x) => {
                                console.log("inside on change")
                                console.log(obj)
                                baggageChange(e,obj);
                              }}
                          >
                            <option selected key={x["_id"]}>{x[props.tableNames[key]]}</option>
                            {console.log(x[props.tableNames[key]]) }
                            {options.get(x["_id"])  && [ ... options.get(x["_id"])].map((y) => {
                                let c=0;
                              if(y==x[props.tableNames[key]]){
                                c++;
                                return <option key={x["_id"]} selected>{y}</option>;
                            }
                              else 
                              return <option key={x["_id"]}>{y}</option>;
                            })}
                          </select>
                          
                            : x[props.tableNames[key]]
                          }
                        </td>
                      );
                    } else if(key=="Arrives"){return <td>{moment(x[props.tableNames[key]]).format("LLL")}</td>;}
                    else if(key=="Departs"){return <td>{moment(x[props.tableNames[key]]).format("LLL")}</td>;}
                    else return <td>{x[props.tableNames[key]]}</td>;
                  })}
                </tr>
              );
          })}
      </table>
    </>
  );
}

export default CustomeTable;
