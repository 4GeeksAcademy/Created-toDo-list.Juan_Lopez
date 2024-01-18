import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [newToDo, setNewToDo] = useState("tarea agregada");
  const [todos, setToDos] = useState("tarea 1", "tarea 2", "tarea 3");

  const handleClick = () => {
    console.log("se ejecuta onclick");
  };

  const handleChange = () => {
    console.log(event.target.value);
    setNewToDo(event.target.value);
  };
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">ToDo list</h1>

      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Set up ToDo</button>
      </div>
      <p>
        Nueva tarea agregada: <b>{newToDo}</b>
      </p>
      <ul>
        {todos.map((todo) =>{
          return(
            <li>
              {todo}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Home;
