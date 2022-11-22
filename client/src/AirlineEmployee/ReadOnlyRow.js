import moment from "moment";
import React from "react";

function ReadOnlyRow({data, index, handleEditClick, deleteTableRows}) {


    return(
        
        
            <tr key={index}>
                <td>{data.flightNumber}</td>
                <td>{data.arrivingFrom} </td>
                <td>{data.departingTo}</td>
                <td>{moment(data.departs).format("LLL")}</td>
                <td>{moment(data.arrives).format("LLL")}</td>
                <td><button className="btn btn-outline-danger" onClick={(e)=>deleteTableRows(index)}>x</button></td>
                <td><button className="btn btn-outline-success" onClick={(e)=>handleEditClick(index,e,data)}>Edit</button></td>
            </tr>

         
   
    )
    
}

export default ReadOnlyRow;