import React, { Component ,useState} from 'react';
function Dropdown(props) {
    const [showDrop,setShowDrop]=useState(false);
    const handleChange=(e)=>{
        console.log(e.target.value)
        props.handleStatusChange(props.row,e.target.value)
    }
    return <>
    
    { 
        showDrop==false ?
        <td onDoubleClick={()=>setShowDrop(!showDrop)}>{props.value}</td>
        :<select onChange={(e)=>handleChange(e)}>
           { props.value=="Open" && <option selected>Open</option>}
           { props.value=="Open" && <option >Close</option>}
            {props.value=="Close" && <option selected>Close</option>}
            {props.value=="Close" && <option >Open</option>}


        </select>
    }
    </>;
}

export default Dropdown;