import React, { useState, useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";
import initiateDB from "../db/initDB";

const db = initiateDB();

function MainComponent() {
  const [userState, setUserState] = useState({ users: [] });
  const [editingUser, setEditingUser] = useState(null);

  const handleSubmit = async ({ name, email }) => {
    try {
      if (editingUser) {
        await db.editUser(editingUser.id, { name, email });
        setEditingUser(null);
      } else {
        await db.addUser({ name, email });
      }
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await db.deleteUser(id);
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async () => {
    try {
      const users = await db.getUsers();
      setUserState({ users });
    } catch (error) {
      console.error(error);
    }
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
