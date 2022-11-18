import moment from "moment";

function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            console.log("in Table Rows")
            console.log(rowsData)
            
            const {Flight_number,Source,Destiantion,DepartureTime,ArrivalTime,Status}= data;
            return(

                <tr key={index}>
                <td><input type="text" value={data.flightNumber} onChange={(evnt)=>(handleChange(index, evnt))} name="Flight_number" className="form-control"/></td>
                <td><input type="text" value={data.arrivingFrom}  onChange={(evnt)=>(handleChange(index, evnt))} name="Source" className="form-control"/> </td>
                <td><input type="text" value={data.departingTo}  onChange={(evnt)=>(handleChange(index, evnt))} name="Destiantion" className="form-control" /> </td>
                <td><input type="datetime-local" value={data.departs}  onChange={(evnt)=>(handleChange(index, evnt))} name="Arrival" className="form-control" /> </td>
                <td><input type="datetime-local" value={data.arrives}  onChange={(evnt)=>(handleChange(index, evnt))} name="Departure" className="form-control" /> </td>
                <td><input type="text" value={Status}  onChange={(evnt)=>(handleChange(index, evnt))} name="Status" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                <td><button className="btn btn-outline-success" >OK</button></td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;