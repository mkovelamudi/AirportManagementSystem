import React, { Component ,useState} from 'react';
import './CustomTable.css'
function Dropdown(props) {
    const [showDrop,setShowDrop]=useState(false);
    const handleChange=(e)=>{
        console.log("targert value of drop down",e.target.value)
        props.handleStatusChange(props.row,e.target.value)
    }
    return <>
    
    { 
        showDrop==false ?
        <td onDoubleClick={()=>setShowDrop(!showDrop)} ><span className={props.value=="Active" ?"ActiveClass":"InactiveClass"}>{props.value}</span></td>
        :<select onChange={(e)=>handleChange(e)}>
           { props.value=="Active" && <option selected>Active</option>}
           { props.value=="Active" && <option >Inactive</option>}
            {props.value=="Inactive" && <option selected>Inactive</option>}
            {props.value=="Inactive" && <option >Active</option>}


        </select>
    }
    </>;
}

export default Dropdown;