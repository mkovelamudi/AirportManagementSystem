import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from '../Navigation/Nav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import FlightStatus from '../FlightStatus/FlightStatus';
import LoginComponent from '../Login/LoginComponent';

class Layout extends Component {
    state = {  
        page:"Home",
    } 
    changePage=(p)=>{
        this.setState({ page : p });
    }
    render() { 
        return <><Nav change={this.changePage} logged={this.props.logged} changeLogged={this.props.changeLogged}></Nav>
       {/* {this.state.page=="Home" && <Home></Home>}
       {this.state.page=="Flight" && <FlightStatus></FlightStatus>}
       {this.state.page=="LogIn" && <LoginComponent></LoginComponent>} */}

<Outlet changeLogged={this.props.changeLogged}/>
        
        <Footer page={this.state.page}></Footer>
        </>;
    }
}
 
export default Layout;