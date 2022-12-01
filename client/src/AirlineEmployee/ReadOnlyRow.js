import moment from "moment";
import React from "react";

function ReadOnlyRow({data, index, handleEditClick, deleteTableRows}) {


    return(
        
        
            <tr key={index}>
                <td>{data.flightNumber}</td>
                <td>{data.arrivingFrom} </td>
                <td>{data.departingTo}</td>
                <td>{data.departs && (data.departs.split("T")[0]+" "+data.departs.split("T")[1].split(".")[0])}</td>
                <td>{data.arrives && (data.arrives.split("T")[0]+" "+data.arrives.split("T")[1].split(".")[0])}</td>
                <td><button className="btn btn-outline-danger" onClick={(e)=>deleteTableRows(index)}>x</button></td>
                <td><button className="btn btn-outline-success" onClick={(e)=>handleEditClick(index,e,data)}>Edit</button></td>
            </tr>

         
   
    )
    
}

export default ReadOnlyRow;