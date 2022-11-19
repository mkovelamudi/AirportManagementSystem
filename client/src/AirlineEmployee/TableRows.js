import moment from "moment";

function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            
            return(

                <tr key={index}>
                <td><input type="text" value={data.flightNumber} onChange={(evnt)=>(handleChange(index, evnt))} name="flightNumber" className="form-control"/></td>
                <td><input type="text" value={data.arrivingFrom}  onChange={(evnt)=>(handleChange(index, evnt))} name="arrivingFrom" className="form-control"/> </td>
                <td><input type="text" value={data.departingTo}  onChange={(evnt)=>(handleChange(index, evnt))} name="departingTo" className="form-control" /> </td>
                <td><input type="datetime-local" value={moment(data.departs).format("YYYY-MM-DDThh:mm")}  onChange={(evnt)=>(handleChange(index, evnt))} name="departs" className="form-control" /> </td>
                <td><input type="datetime-local" value={moment(data.arrives).format("YYYY-MM-DDThh:mm")}  onChange={(evnt)=>(handleChange(index, evnt))} name="arrives" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
                <td><button className="btn btn-outline-success" >Edit</button></td>
                <td><button className="btn btn-outline-success" >OK</button></td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;