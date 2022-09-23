import React, { Component } from 'react';
import './Nav.css';
class Nav extends Component {
    state = {  } 
    render() { 
        return <div className='container-fluid'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">SFJC Airport</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" onClick={()=>{this.props.change("Home")}}>Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={()=>{this.props.change("Flight")}}>Flight Status</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          
      
   
          
        </div>
      <button class="btn my-2 my-sm-0 hoverButton" type="submit"  onClick={()=>{this.props.change("LogIn")}}>Log In</button>

      </nav>
        </div>
    }
}
 
export default Nav;