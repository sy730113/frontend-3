
import { React, useState} from "react";
import {Button} from "antd";
const SimpleTable = ({ dataSource}) => {

  const editItem=(item)=>{
  
}

const deleteItem=(id)=>{
    return dataSource.filter((item)=>item.id!==id);
}


  return (
    <div>
      {dataSource.length ? (
        <>
        <table>
        <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {dataSource.map((item, index) => {
            return (
           
               
                <tbody>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                    <Button type="primary" onClick={()=>editItem(item)}>edit</Button>
                    </td>
                    <td>
                    <Button type="danger" onClick={()=>deleteItem(item.id)}>delete</Button>
                    </td>
                  </tr>
                </tbody> 
             
            );
          })}
        </table>
      
        
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
