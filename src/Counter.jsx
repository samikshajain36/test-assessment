import React, { useState } from "react";
import "./Counter.css"

function Circle({ count, color, onClick }) {
  return (
    <div className="circle justify-self-center" style={{ backgroundColor: color,margin:"23px" }} >
      <div className="main flex flex-col justify-self-center">
      <div className="counter">{count}</div>
      <div className="color">{color}</div>
      <button onClick={onClick}>Increase Count</button>
      </div>
    </div>
  );
}

function App() {
  const [circles, setCircles] = useState([
    { count: 0, color: "yellow" }
  ]);

  const increaseCount = (index) => {
    setCircles((prevCircles) => {
      const newCircles = [...prevCircles];
      const randomColor = getRandomColor();
      newCircles[index] = {
        count: newCircles[index].count + 1,
        color: randomColor,
      };
      return newCircles;
    });
  };

  const addCircle = () => {
    if (circles.length >= 10) {
      return;
    }
    setCircles((prevCircles) => [
      ...prevCircles,
      { count: 0, color: "yellow" },
    ]);
  };

  const duplicateCircle = (index) => {
    if (circles.length >= 10) {
      return;
    }
    setCircles((prevCircles) => {
      const newCircles = [...prevCircles];
      const duplicatedCircle = { ...newCircles[index] };
      duplicatedCircle.count = 0;
      newCircles.splice(index + 1, 0, duplicatedCircle);
      return newCircles;
    });
  };

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "orange", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="main circles justify-self-center flex justify-items-center">
      <div className="main circles justify-self-center flex justify-items-center">
        {circles.map((circle, index) => (
          <Circle
            key={index}
            count={circle.count}
            color={circle.color}
            onClick={() => increaseCount(index)}
            style={{backgroundColor:"burlywood"}}
          />
        ))}
      </div>
      <div>
        <button className="buttonstyle"onClick={addCircle} >Add Circle</button>
        {circles.map((_, index) => (
          <button className="buttonstyle" key={index} onClick={() => duplicateCircle(index)}>
            Duplicate Circle {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
