import React, { Component, useState } from "react";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import moment from "moment";
import { useNavigate } from "react-router-dom";

import "./Home.css";
function Home() {
  const navigate = useNavigate();
  

    const searchHandler=(e)=>{
      // setTimeout(() => {
      //   console.log('====>', e.target.value)
        
      // }, 1000)
      if(e.keyCode == 13)
      {console.log('====>', e.target.value)
      let type;
      if(document.getElementById('arrival').checked)
      {
          type="arrival"
      }
      else{
        type="departure"
      }
      navigate('/Flight?value='+e.target.value+"&type="+type)

    }
    }
    return (
      <div className="container-fluid">
        <div className="banner"></div>
        <div className="searchFlightHome">
          <div className="row" style={{padding:"20px"}}>
            <div className="col-sm">
              <div className="homeDivWelcome">
                <div class="subhead">{moment().format("DD-MM-YYYY hh:mm:ss")} 18°C 64°F</div>
                <div class="welcomeHeadline">Welcome</div>
                <div class="subhead">
                  to San Fred Joneshon International Airport
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="row">
                <div className="col-sm-4" style={{paddingTop:"5px"}}>
                  <h4>Flight Search</h4>
                </div>
                <div className="col-sm">
                    <div className="row radioButton">
                        <div className="col-sm" style={{display:"flex"}}>
                  <label class="container radio">
                    Arrival
                    <input type="radio" style={{marginLeft:"10px"}} name="radio" id="arrival" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container radio">
                    Departure
                    <input type="radio" style={{marginLeft:"10px"}} checked="checked" id="departure" name="radio"  />
                    <span class="checkmark"></span>
                  </label>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row">
              <input type="text" className="search" onKeyDown={(e)=>searchHandler(e)} placeholder="Enter airline, or flight #"/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row homeInfo">
            <div className="col-sm homeInfo-col">
                <h4 className="homeInfo-h4">Travel Information</h4>
                <h4>And</h4>
                <h4>Guidelines</h4>

            </div>
            <div className="col-sm Links">
            <div class="field__item"><a href="/passengers/travel-tips">Summer Travel Tips</a> <BsFillArrowRightCircleFill/></div>
            <div class="field__item"><a href="/passengers/travel-tips">COVID-19 Travel Guidance</a><BsFillArrowRightCircleFill/></div>
            <div class="field__item"><a href="/passengers/travel-tips">COVID-19 Testing Options </a><BsFillArrowRightCircleFill/></div>
            <div class="field__item"><a href="/passengers/travel-tips"> Getting Around SFO</a><BsFillArrowRightCircleFill/></div>
           
           
            </div>
        </div>
      </div>
    );
  }


export default Home;
