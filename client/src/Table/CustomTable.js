import React, { Component,useEffect,useState } from "react";
import "./CustomTable.css";

function CustomeTable(props) {
  const [options, setOptions] = useState([]);
    
    useEffect(() => {
        setOptions(["3","4","5"]);
      }, []);
      
  const baggageSelect = (x) => {
    setOptions(["3","4"]);
    
    console.log(x);
  };
  return (
    <>
      <table>
        <tr>
          {Object.keys(props.tableNames).map((x) => {
            if (
              props.FromAirport &&
              (x == "Arrives" || x == "From" || x == "Baggage Collection")
            ) {
            } else if (!props.FromAirport && (x == "Departs" || x == "To")) {
            } else return <th>{x}</th>;
          })}
        </tr>
        {props.data && props.data.map((x) => {
          const obj = x;
          return (
            <tr>
              {Object.keys(props.tableNames).map((key) => {
                if (
                  props.FromAirport &&
                  (key == "Arrives" || key == "From" || key == "Baggage Collection")
                ) {
                } else if (
                  !props.FromAirport &&
                  (key == "Departs" || key == "To")
                ) {
                } else if (key == "Baggage Collection") {
                  return (
                    <td>
                      <select
                        onClick={() => {
                          baggageSelect(obj);
                        }}
                      >
                        <option selected>{x[props.tableNames[key]]}</option>
                        {options.map(opt=>{return <option>{opt}</option>})}
                        
                      </select>
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

export default CustomeTable;
