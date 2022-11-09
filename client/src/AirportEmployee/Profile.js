import React, { Component,useEffect } from "react";
import "./Profile.css";
import profileImage from "./../Assets/profile1.png";
import Fields from "./Fields";
function Profile() {
    useEffect((props) => {
        // createData("customer1@gmail.com", "+1 619 234 1235", "San Jose, CA", "Visa ending in 1246", "Not Set ","password") 

      }, []);

      


  return (
    <>
      <div className="container-fluid" style={{marginBottom:"-80px"}}>
        <div className="row profile">
            
          <div className="col-sm-6 profile-column">
            
            {/* image profile and name */}
            <div className="row image">
              <div className="col-sm-4">
                <img
                  src={profileImage}
                  alt="Logo"
                  width={"110px"}
                  height={"120px"}
                />
              </div>
              <div
                className="col-sm-8 "
                style={{ paddingTop: "20px", textAlign: "left" }}
              >
                <div className="row">
                  <h3 style={{ color: "#434343" }}>Vamshidhar P</h3>
                </div>
                <div className="row">
                  <h6 style={{ color: "#434343" }}>Airport Authority</h6>
                </div>
              </div>
            </div>

            <Fields rowName={"Email"} rowValue={"vamshidhar199@gmail.com"}/>
            <Fields rowName={"Phone"} rowValue={"430 439 5672"}/>
            <Fields rowName={"Address"} rowValue={"300 First St, San Jose , CA"}/>
            <Fields rowName={"ID"} rowValue={"*******3456"}/>
            

          </div>
          
        </div>
      </div>
    </>
  );
}

export default Profile;
