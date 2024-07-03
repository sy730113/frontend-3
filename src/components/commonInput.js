import React, { useState } from "react";

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onSubmit({ name, email });
    setEmail("");
    setName("");
  };

  return (
    <div className="header-box">
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="primary" onClick={handleSubmit}>
        {!!editMode ? "Edit user" : "Add user"}
      </button>
    </div>
  );
};

export default InputHandler;
