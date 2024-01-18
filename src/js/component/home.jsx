import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [newToDo, setNewToDo] = useState("tarea agregada");
  const [todos, setToDos] = useState(["tarea 1", "tarea 2", "tarea 3"]);

  const handleClick = () => {
    setToDos([...todos, newToDo]);
  };

  const deleteTask = (index) => {
    console.log(index);
    const newestList = todos.filter((todo, i) => i !== index);
    setToDos(newestList);
  };

  const handleChange = () => {
    // console.log(event.target.value);
    setNewToDo(event.target.value);
  };
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">ToDo list</h1>
      <div className="container">
        <div className="d-flex">
          <input type="text" className="form-control" onChange={handleChange} />
          <button className="btn btn-success ms-2" onClick={handleClick}>
            Add task
          </button>
        </div>
        <p>
          Ultima tarea agregada: <b>{newToDo}</b>
        </p>

        <ul className="card list-group">
          {todos.map((todo, index) => {
            return (
              <li
                className={`d-flex justify-content-between card-body list-group-item align-items-center fw-bold ${
                  index % 2 === 0 ? "bg-light" : ""
                }`}
              >
                {todo}{" "}
                <button
                  onClick={() => deleteTask(index)}
                  className="btn btn-danger my-2"
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
