import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const handleClick = () => {
    console.log("se ejecuta onclick");
  };

  const handleChange = () => {
    console.log("escribiendo");
    console.log(event.targ);
  };
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">ToDo list</h1>

      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Set up ToDo</button>
      </div>
    </div>
  );
};


export default Home;
