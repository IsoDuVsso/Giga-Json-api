import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ data }) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>School Id</th>
            <th>School Name</th>
            <th>Country</th>       
            <th>Connectivity Status</th>
            <th>Coordionates</th>
          </tr>
        </thead>
        <tbody>
        {
            data.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td>{item.connected}</td>
                    <td>{item.coord}</td>
                    <td/>
                </tr>
            ))
        }          
        </tbody>
      </table>
    );
    
}
  
  export default Table