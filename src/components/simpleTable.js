import React from "react";
import { Button } from "antd";

const SimpleTable = ({ dataSource, deleteItem ,editItem}) => {


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
            <tbody>
              {dataSource.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Button type="primary" onClick={() => editItem(item)}>Edit</Button>
                  </td>
                  <td>
                    <Button type="danger" onClick={() => deleteItem(item.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
