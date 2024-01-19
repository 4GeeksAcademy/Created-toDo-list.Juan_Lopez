import React, { useEffect, useState } from "react";

//create your first component
// creacion de useState para actualizar los valores
const Home = () => {
  const [newToDo, setNewToDo] = useState("tarea agregada");
  const [todos, setToDos] = useState(["task"]);

  // handleClick para agregar una nueva tarea
  const handleClick = () => {
    setToDos([...todos, newToDo]);
  };

  //iniciar el ToDo List
  const getTasks = async () => {
    try {
      let response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/Juan_Lopez"
      );
      let data = await response.json();
      console.log(data);
      setToDos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //update ToDo list
  const updateTask = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/Juan_Lopez",
        {
          method: "PUT",
          body: JSON.stringify(todos),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // funcion de delete para eliminar las tareas al presionar un boton "X"
  const deleteTask = (index) => {
    console.log(index);
    const newestList = todos.filter((todo, i) => i !== index);
    setToDos(newestList);
  };

  // handleChange para registrar la nueva tarea escrita en el input
  const handleChange = (event) => {
    // console.log(event.target.value);
    setNewToDo(event.target.value);
  };

  useEffect(() => {
    getTasks();
  }, []);
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
                {todo.label}{" "}
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
