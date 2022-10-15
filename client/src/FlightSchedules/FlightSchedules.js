import react, { Component, useEffect, useState } from "react";
import "./FlightSchedules.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

class FlightSchedules extends Component {
  state = {};
  render() {
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
        {/* <div class="_globalFilter_6uyzw_11 Date_Picker">
          <label for="flightsGlobalSearch" class="_filterLabel_6uyzw_46">
            Date:{" "}
          </label>
          <DatePicker
            style={{ width: "50%" }}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div> */}
        {
          //   <div>
          //     <TextField
          //       id="date"
          //       label="Choose your birthdate"
          //       type="date"
          //       defaultValue="2017-05-24"
          //       InputLabelProps={{
          //         shrink: true,
          //       }}
          //     />
          //  </div>
        }
        <div className="timeFrame">
          {" "}
          Time :{" "}
          <select>
            <option value="1hr"> Next 1 hr</option>
            <option value="4hr"> Next 4 hr</option>
            <option value="8hr"> Next 8 hr</option>
          </select>
        </div>
      </div>
    );
  }
}

export default FlightSchedules;
//{
// {
//   const [value, setValue] = react.useState(0);
//   const [startDate, setStartDate] = useState(new Date());

//   useEffect(() => {
//     axios.get("/all/flightScheduleDetails").then((res) => {
//       console.log(res);
//       setFlightData(res.data);
//     });
//   }, []);
// }
// }
