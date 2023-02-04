import React from "react";
import "./note.css";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EditIcon from "@mui/icons-material/Edit";

const Note = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="tdl__note">
      <p>{text}</p>

      <button onClick={deleteToDo}>
        <RemoveCircleIcon />
      </button>

      <button onClick={updateMode}>
        <EditIcon />
      </button>
    </div>
  );
};

export default Note;
