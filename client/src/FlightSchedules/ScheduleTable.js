import React, { Component, useEffect, useState } from "react";
import "./CustomTable.css";
import axios from "axios";
import Dropdown from "./Dropdown";
//for snack bar
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";

function ScheduleTable(props) {
  const [options, setOptions] = useState(new Map());

  useEffect(() => {}, []);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
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
      ></IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Saved Succesfully"
        action={action}
      ></Snackbar>
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
          props.data
            .filter((x) => {
              x["Terminal"] && console.log(x["Terminal"]);
              if (props.searchData == null || props.searchData == "All") {
                return x;
              } else {
                if (
                  (x["airline"] &&
                    x["airline"]
                      .toLowerCase()
                      .includes(props.searchData.toLowerCase())) ||
                  (x["flightNumber"] &&
                    x["flightNumber"]
                      .toLowerCase()
                      .includes(props.searchData.toLowerCase())) ||
                  (x["terminal"] && x["terminal"] == props.searchData)
                )
                  return x;
              }
            })
            .map((x) => {
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
                      } else if (
                        !props.FromAirport &&
                        (key == "Departs" || key == "To")
                      ) {
                      } else if (key == "Arrives") {
                        return (
                          <td>
                            {moment(x[props.tableNames[key]]).format("LLL")}
                          </td>
                        );
                      } else if (key == "Departs") {
                        return (
                          <td>
                            {moment(x[props.tableNames[key]]).format("LLL")}
                          </td>
                        );
                      } else return <td>{x[props.tableNames[key]]}</td>;
                    })}
                  </tr>
                );
            })}
      </table>
    </>
  );
}

export default ScheduleTable;
