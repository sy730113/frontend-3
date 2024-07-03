import React, { useState, useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";
import initiateDB from "../db/initDB";

const db = initiateDB();

function MainComponent() {
  const [userState, setUserState] = useState({ users: [] });
  const [editingUser, setEditingUser] = useState(null);

  const handleSubmit = ({ name, email }) => {
    if (editingUser) {
      db.editUser(editingUser.id, { name, email })
        .then(() => {
          setEditingUser(null);
          getUsers();
        })
        .catch((error) => console.error(error));
    } else {
      db.addUser({ name, email })
        .then(() => getUsers())
        .catch((error) => console.error(error));
    }
  };

  const handleDeleteUser = (id) => {
    db.deleteUser(id)
      .then(() => getUsers())
      .catch((error) => console.error(error));
  };

  const getUsers = () => {
    db.getUsers()
      .then((users) => setUserState({ users }))
      .catch((error) => console.error(error));
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} editingUser={editingUser} />
      <SimpleTable 
        dataSource={userState.users}
        deleteItem={handleDeleteUser}
        editItem={handleEditUser}
      />
    </div>
  );
}

export default MainComponent;
