import React from "react";
import "./header.css";
import NotesIcon from "@mui/icons-material/Notes";

const Header = () => {
  return (
    <div className="tdl__header">
      <div className="tdl__header-brand">
        
        <h1>
          <NotesIcon />
          Mjay DS
        </h1>
      </div>
    </div>
  );
};

export default Header;
