import React, { Component } from "react";
import "./Flight.css";
class FlightStatus extends Component {
  state = {};
  render() {
    return (
      <>
        <div classname="flightStatus">
          <form class="_filterBar_6uyzw_1">
            <div class="_filterBarLine_6uyzw_5">
              <div class="_radioColumnFilter_6uyzw_37">
                <div>
                  <label for="flight_kind0">Departures</label>
                  <input
                    type="radio"
                    id="flight_kind0"
                    name="flight_kind"
                    value="Departures"
                    checked=""
                  />
                </div>
                <div>
                  <label for="flight_kind1">Arrivals</label>
                  <input
                    type="radio"
                    id="flight_kind1"
                    name="flight_kind"
                    value="Arrivals"
                  />
                </div>
              </div>
              <div class="_globalFilter_6uyzw_11">
                <label for="flightsGlobalSearch" class="_filterLabel_6uyzw_46">
                  Flight:{" "}
                </label>
                <input
                  id="flightsGlobalSearch"
                  type="text"
                  placeholder="Airline, Departing To, Flight #"
                  value=""
                />
              </div>
              {/* <div class="_selectColumnFilter_6uyzw_57 _sortingFilter_6uyzw_155">
                <label for="flightsSortBy" class="_filterLabel_6uyzw_46">
                  Sort By:
                </label>
                <div class="form-type-select">
                  <select name="flightsSortBy" id="flightsSortBy">
                    <option value="scheduled_aod_time">Departure Time</option>
                    <option value="airline.airline_name">Airline</option>
                    <option value="airport.airport_name">Location</option>
                  </select>
                </div>
              </div> */}
              <button class="_buttonReset_1rau0_46" type="reset">
                Reset Filters
              </button>
            </div>
            {/* <button
              aria-expanded="true"
              aria-controls="additional-options"
              class="_additionalFilters_6uyzw_71 active"
            >
              Additional Options
              <span class="_plusButton_6uyzw_87 active"></span>
            </button> */}
            <div
              class="_filterBarLine_6uyzw_5 _additionalFiltersSection_6uyzw_152"
              id="additional-options"
            >
              <div>
                {/* <div class="_radioColumnFilter_6uyzw_37">
                  <div>
                    <label for="code_shares">Exclude Code Share Flights</label>
                    <input
                      type="checkbox"
                      id="code_shares"
                      name="code_shares"
                    />
                  </div>
                </div> */}
              </div>
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
      </>
    );
  }
}

export default FlightStatus;
