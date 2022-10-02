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
          {props.tableNames.map((x) => {
            if (
              props.FromAirport &&
              (x == "Arrives" || x == "From" || x == "Baggage Collection")
            ) {
            } else if (!props.FromAirport && (x == "Departs" || x == "To")) {
            } else return <th>{x}</th>;
          })}
        </tr>
        {props.data.tableListTmp.map((x) => {
          const obj = x;
          return (
            <tr>
              {Object.keys(x).map((key) => {
                if (
                  props.FromAirport &&
                  (key == "arrives" || key == "from" || key == "baggage")
                ) {
                } else if (
                  !props.FromAirport &&
                  (key == "departs" || key == "to")
                ) {
                } else if (key == "baggage") {
                  return (
                    <td>
                      <select
                        onClick={() => {
                          baggageSelect(obj);
                        }}
                      >
                        <option selected>{x[key]}</option>
                        {options.map(opt=>{return <option>{opt}</option>})}
                        
                      </select>
                    </td>
                  );
                } else return <td>{x[key]}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default CustomeTable;
