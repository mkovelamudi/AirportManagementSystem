import { useState ,useEffect} from "react";
import TableRows from "./TableRows"
import "./AirlineEmployee.css";


function AddDeleteTableRows(props){

    const [rowsData, setRowsData] = useState([]);
    useEffect(() => {
        setRowsData(props.flights)
      },[]);
   
    
    const addTableRows = ()=>{
        const rowsInput={
            Flight_number:'',
            Source:'',
            Destiantion:'',
            DepartureTime:'',
            ArrivalTime:'',
            Status:''  
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    const name = evnt.target.name
    const value = evnt.target.value;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
}
    return(
        <div className="airline_table">
            
                <table className="table">
                    <thead className="table_head">
                      <tr>
                          <th>Flight Number</th>
                          <th>Source</th>
                          <th>Destiantion</th>
                          <th>Departure</th>
                          <th>Arrival</th>
                          <th>Status</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>

                    </thead>
                   <tbody>
                    
                    <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   </tbody> 
                </table>

        </div>
    )

}
export default AddDeleteTableRows