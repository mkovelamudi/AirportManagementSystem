import { useState ,useEffect, Fragment} from "react";
import TableRows from "./TableRows"
import "./AirlineEmployee.css";
import ReadOnlyRow from "./ReadOnlyRow"
import moment from "moment";
import axios from "axios";


function AddDeleteTableRows(props){

    const [rowsData, setRowsData] = useState([]);
    const [editFlightIndex, setEditFlightIndex] = useState(null);
    const [cancelEdit, setCancelEdit] = useState(null);

    const [addFlightData, setAddFlightData] = useState({
        flightNumber:'',
        arrivingFrom:'',
        departingTo:'',
        departs:'',
        arrives:''
    })
    const [editFlightData, setEditFlightData] = useState({
        flightNumber:'',
        arrivingFrom:'',
        departingTo:'',
        departs:'',
        arrives:''
    })
    useEffect(() => {
        setRowsData(props.flights)
      },[]);
   
    
    const addTableRows = ()=>{
        const rowsInput={
            flightNumber:'',
            arrivingFrom:'',
            departingTo:'',
            departs:'',
            arrives:'' 
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
    const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
        axios.post('/all/DeleteScheduleFlights',rowsData[index]).then((res)=>{
            console.log("Removed Flight")
            console.log(res.data)})
    }
 
    const handleChange = (index, evnt)=>{
    const name = evnt.target.name
    const value = evnt.target.value;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
    }

    const handleEditClick = (index, evnt, data)=>{
        setEditFlightIndex(index);
        const initialValues = {
            flightNumber:data.flightNumber,
            arrivingFrom:data.arrivingFrom,
            departingTo:data.departingTo,
            departs:moment(data.departs).format("YYYY-MM-DDThh:mm"),
            arrives:moment(data.arrives).format("YYYY-MM-DDThh:mm")
        }
        setEditFlightData(initialValues)
        setCancelEdit(initialValues)
    }

    const handleSaveClick = (index, evnt) =>{
        console.log("CLicked Save")
        console.log(editFlightData);
        // setRowsData(editFlightData);
        console.log(index)
        
        const editedFlight = {
            flightNumber:editFlightData[index].flightNumber,
            arrivingFrom:editFlightData[index].arrivingFrom,
            departingTo:editFlightData[index].departingTo,
            departs:moment(editFlightData[index].departs).format("YYYY-MM-DDThh:mm"),
            arrives:moment(editFlightData[index].arrives).format("YYYY-MM-DDThh:mm")
        };
        // console.log("Edited Flight")
        // console.log(editedFlight)
        const newFlightData = [...rowsData];
        // console.log("New Flight Data")
        // console.log(newFlightData)
        newFlightData[index] = editedFlight;
        console.log("New Flight Data index")
        console.log(newFlightData[index]);
        setRowsData(newFlightData);
        const sending = [...rowsData];
        if(sending[index].hasOwnProperty('_id')){
            console.log("Updated Flight")
            axios.post('/all/pushScheduledFlights',sending[index]).then((res)=>{
                console.log("Updated Flight Data")
                console.log(res.data)})
        }
        else{
            sending[index]['id']="";
            sending[index]['airline']="Emirates"
            axios.post('/all/pushScheduledFlights',sending[index]).then((res)=>{
                console.log("Added Flight Data")
                console.log(res.data)})
        }
        
        // console.log("Rows Data")
        // console.log(rowsData)
        setEditFlightIndex(null);
        // setEditFlightData(addFlightData);

    }

    const handleEditFlightChange = (index,evnt) =>{
        const name = evnt.target.name
        const value = evnt.target.value;
        console.log(name)
        console.log(value)
        console.log(index)
        const newInput = [...rowsData] 
        newInput[index][name]=value
        console.log(newInput)
        setEditFlightData(newInput)
        console.log("After setting")
        console.log(editFlightData)
        
    }

    const handleAddFlightChange = (index, evnt)=>{
        const name = evnt.target.name
        const value = evnt.target.value;
        const newFlight = [...addFlightData] 
        newFlight[index][name]=value
        setAddFlightData(newFlight)
    }

    const handleAddClick = ()=>{
        console.log("Inside ADD");
        console.log(addFlightData)
        console.log(rowsData)
        setEditFlightData(addFlightData)
        console.log(editFlightData)
        const newRows = [...rowsData, addFlightData];
        setRowsData(newRows);
        console.log(rowsData)
        // console.log("Inside ADD")
        // console.log(rowsData.length);
        // console.log(rowsData);
        setEditFlightIndex(rowsData.length);
        // console.log(rowsData.length);
    }

    const handleCancelClick = () => {
        setEditFlightIndex(null);
        setEditFlightData(cancelEdit)
        setCancelEdit(null)
    };

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
                          <th><button className="btn btn-outline-success" onClick={handleAddClick} >+</button></th>
                      </tr>

                    </thead>
                   <tbody>
                   { rowsData.map((data,index)=>(
                    <Fragment>
                        {editFlightIndex === index ? (<TableRows index={index} 
                        editFlightData={editFlightData} handleEditFlightChange={handleEditFlightChange} 
                        handleSaveClick={handleSaveClick} handleCancelClick={handleCancelClick} />)
                        :(<ReadOnlyRow data={data} index={index} handleEditClick={handleEditClick} 
                        deleteTableRows={deleteTableRows}/>) }
                    </Fragment>
                   )
                   )}
                   </tbody> 
                </table>
                

        </div>
    )

}
export default AddDeleteTableRows