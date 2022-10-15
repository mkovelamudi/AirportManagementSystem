function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {Flight_number,Source,Destiantion,Terminal,Gate,Status}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={Flight_number} onChange={(evnt)=>(handleChange(index, evnt))} name="Flight_number" className="form-control"/>
                </td>
                <td><input type="text" value={Source}  onChange={(evnt)=>(handleChange(index, evnt))} name="Source" className="form-control"/> </td>
                <td><input type="text" value={Destiantion}  onChange={(evnt)=>(handleChange(index, evnt))} name="Destiantion" className="form-control" /> </td>
                <td><input type="text" value={Terminal}  onChange={(evnt)=>(handleChange(index, evnt))} name="Terminal" className="form-control" /> </td>
                <td><input type="text" value={Gate}  onChange={(evnt)=>(handleChange(index, evnt))} name="Gate" className="form-control" /> </td>
                <td><input type="text" value={Status}  onChange={(evnt)=>(handleChange(index, evnt))} name="Status" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;