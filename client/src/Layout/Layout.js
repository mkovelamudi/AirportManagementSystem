import React, { Component } from 'react';
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
        return <><Nav change={this.changePage}></Nav>
       {this.state.page=="Home" && <Home></Home>}
       {this.state.page=="Flight" && <FlightStatus></FlightStatus>}
       {this.state.page=="LogIn" && <LoginComponent></LoginComponent>}
        
        <Footer page={this.state.page}></Footer>
        </>;
    }
}
 
export default Layout;