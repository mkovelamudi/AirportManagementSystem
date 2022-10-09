import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Nav.css";
class Nav extends Component {
  state = {};
  change = (name) => {
    console.log(name);
  };
  render() {
    return (
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light navBackground">
          <a class="navbar-brand" href="#">
            SFJC Airport
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto nav-tabs nav">
              <li class="nav-item ">
                <Link
                  onClick={() => {
                    this.props.change("Home");
                  }}
                  class="nav-link"
                  to="/"
                >
                  Home
                </Link>{" "}
              </li>
              <li class="nav-item">
                {/* <Link  onClick={() => {
                    this.props.change("Flight");
                  }} class="nav-link" to="/Flight">
                    <li>Flights</li>
                  </Link> */}
                <li class="nav-link">
                  Flights
                  <ul>
                    {/* <li>  */}
                    <Link
                      onClick={() => {
                        this.props.change("Flight");
                      }}
                      class="nav-link"
                      to="/Flight"
                    >
                      <li class="sub-menu">Status</li>
                    </Link>

                    <Link
                      onClick={() => {
                        this.props.change("Flight");
                      }}
                      class="nav-link"
                      to="/FlightSchedules"
                    >
                      <li class="sub-menu"> Schedules</li>
                    </Link>
                    <Link
                      onClick={() => {
                        this.props.change("Flight");
                      }}
                      class="nav-link"
                      to="/AirlinesAtSffo"
                    >
                      <li class="sub-menu">Airlines</li>
                    </Link>
                  </ul>
                </li>
              </li>
              <li class="nav-item dropdown"></li>

              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          {/* <button
            class="btn my-2 my-sm-0 hoverButton"
            type="submit"
            onClick={() => {
              this.props.change("LogIn");
            }}
          > */}
          <ul class="navbar-nav mr-auto nav-tabs nav">
            <li class="nav-item" id={localStorage.getItem("auth")}>
              <Link
                onClick={() => {
                  if (
                    JSON.parse(localStorage.getItem("auth")).employees[0]
                      .isLogged
                  ) {
                    localStorage.removeItem("auth");
                    this.props.changeLogged(false);
                  }
                  this.props.change("LogIn");
                }}
                class="nav-link navButton"
                to="/LogIn"
              >
                {this.props.logged || localStorage.getItem("auth")
                  ? "Log Out"
                  : "Log In"}
              </Link>
            </li>
          </ul>
          {/* </button> */}
        </nav>
      </div>
    );
  }
}

export default Nav;
