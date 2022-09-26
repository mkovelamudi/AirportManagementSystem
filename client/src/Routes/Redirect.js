import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect(props) {
    const navigate=useNavigate();
    
    navigate(props.page)
    return  null;
}

export default Redirect;