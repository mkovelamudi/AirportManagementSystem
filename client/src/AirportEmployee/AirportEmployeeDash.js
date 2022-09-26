import React, { Component ,useEffect} from 'react';
import Redirect from '../Routes/Redirect';
import { useNavigate } from 'react-router-dom';

function AirportEmployeeDash() {
    const navigate=useNavigate();
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        console.log(auth)
        if(auth && auth.employees[0].isLogged){
          
        }
        else{
            navigate('/Login')
        }
      }, []);
    return <>
    <h1>AirportEmployeeDash</h1></>;;
}

export default AirportEmployeeDash;
