import axios from "axios";

const baseUrl = "https://todoapp-backend-je7t.onrender.com";

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log("data ==> ", data);
      setToDo(data);
    })
    .catch((err) => console.log("err==>", err));
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log("err==>", err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log("err==>", err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log("data==> ", data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log("error==>", err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
