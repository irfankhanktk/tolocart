import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
function AddInstruction({}) {
  const [editing, setEditing] = useState(false);
  const [instruction, setInstruction] = useState("");

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Save the instruction text or perform any other necessary action
    setEditing(false);
  };

  return (
    <div className="add-instruction-container">
      <div className={`input-container editing`}>
        <input
          className="border-0"
          type="text"
          placeholder="Add Instruction"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
        />
        <div className="edit-button">
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default AddInstruction;
