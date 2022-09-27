import React, { Component } from "react";
import './CustomTable.css'
function CustomeTable(props) {
  return (
    <>
      <table>
        <tr>
            {props.tableNames.map(x=>{
                if(props.FromAirport && (x=="Arrives" || x=="From" || x=="Baggage Collection") )
                {}
                else if(!props.FromAirport && (x=="Departs" || x=="To")){}
                else
                return <th>{x}</th>
            })}
          
        </tr>
        <tr>
          <td><select><option>abc</option></select></td>
          <td><input type="text"></input></td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    </>
  );
}

export default CustomeTable;
