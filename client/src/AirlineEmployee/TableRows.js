import moment from "moment";
import { useEffect, useState } from "react";

function TableRows({index, editFlightData, handleEditFlightChange, handleSaveClick, handleCancelClick}) {
   const [arrivals,setArrivals]=useState();
   const [departures,setDepartures]=useState();

    useEffect(()=>{
        console.log(editFlightData.departs)
        console.log(editFlightData.arrives)
        
        setArrivals( String(editFlightData.arrives).split(".")[0])
        setDepartures(String(editFlightData.departs).split(".")[0])
    },[])

    const handleChangeArr=(index,e)=>{
        setArrivals(e.target.value)
        handleEditFlightChange(index,e)
    }
    const handleChangeDep=(index,e)=>{
        setDepartures(e.target.value)
        handleEditFlightChange(index,e)
    }
    return(
        
            <tr key={index}>
                {/* <td><input type="text" value={data.flightNumber} onChange={(evnt)=>(handleChange(index, evnt))} name="flightNumber" className="form-control"/></td>
                <td><input type="text" value={data.arrivingFrom}  onChange={(evnt)=>(handleChange(index, evnt))} name="arrivingFrom" className="form-control"/> </td>
                <td><input type="text" value={data.departingTo}  onChange={(evnt)=>(handleChange(index, evnt))} name="departingTo" className="form-control" /> </td>
                <td><input type="datetime-local" value={moment(data.departs).format("YYYY-MM-DDThh:mm")}  onChange={(evnt)=>(handleChange(index, evnt))} name="departs" className="form-control" /> </td>
                <td><input type="datetime-local" value={moment(data.arrives).format("YYYY-MM-DDThh:mm")}  onChange={(evnt)=>(handleChange(index, evnt))} name="arrives" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                <td><button className="btn btn-outline-success" >Edit</button></td>
                <td><button className="btn btn-outline-success" >OK</button></td> */}
                <td><input type="text" value={editFlightData.flightNumber} onChange={(e)=>handleEditFlightChange(index,e)} name="flightNumber" className="form-control" required/></td>
                <td><input type="text" value={editFlightData.arrivingFrom} onChange={(e)=>handleEditFlightChange(index,e)} name="arrivingFrom" className="form-control" required/> </td>
                <td><input type="text" value={editFlightData.departingTo} onChange={(e)=>handleEditFlightChange(index,e)} name="departingTo" className="form-control" required /> </td>
                <td><input  type="datetime-local" value={departures} onChange={(e)=>handleChangeDep(index,e)} name="departs" className="form-control" required /> </td>
                <td><input  type="datetime-local" value={arrivals} onChange={(e)=>handleChangeArr(index,e)} name="arrives" className="form-control" required /> </td>
                <td><button className="btn btn-outline-success" onClick={(e)=>handleSaveClick(index,e)} >SAVE</button></td>
                <td><button className="btn btn-outline-danger" onClick={(e)=>handleCancelClick(index,e)} >CANCEL</button></td>
            </tr>

          
   
    )
    
}

export default TableRows;