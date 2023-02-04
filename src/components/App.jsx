import React, { useEffect, useState } from "react";

// mui👇👇//
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Grow from "@mui/material/Grow";
import EditIcon from "@mui/icons-material/Edit";

// routes👇👇 //
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "../api/HandleApi";
import { Header, Footer, Note } from "./index";
import "./app.css";

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [bool, setBool] = useState(false);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  function updateMode(_id, text) {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }

  function state() {
    setBool(true);
  }

  return (
    <>
      <div className="tdl__app-background">
        <Header />

        <div className="tdl__textarea">
          <div className="tdl__textarea-createnote">
            <form className="tdl__textarea-createnote_form">
              <textarea
                placeholder="Add ToDo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onClick={state}
                rows={bool ? "2" : "1"}
              />
              <div className="tdl__button-div">
                <Grow in={bool}>
                  <Fab
                    onClick={
                      isUpdating
                        ? () =>
                            updateToDo(
                              toDoId,
                              text,
                              setToDo,
                              setText,
                              setIsUpdating
                            )
                        : () => addToDo(text, setText, setToDo)
                    }
                  >
                    {isUpdating ? <EditIcon /> : <AddIcon />}
                  </Fab>
                </Grow>
              </div>
            </form>
          </div>
        </div>

        {toDo.map((item) => {
          return (
            <Note
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
