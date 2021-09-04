import "./styles.css";
import React, { useState } from "react";

function App() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let newColor = "#" + randomColor;

  const [box1, setBox] = useState({
    backgroundColor: newColor,
    padding: "25px 50px 75px 100px"
  });
  // console.log(newColor);

  // let box1 = {
  //   backgroundColor: newColor,
  //   padding: "25px 50px 75px 100px"
  //    };

  document.body.onkeyup = function (e) {
    if (e.keyCode === 32) {
      changeColor();
      console.log(newColor + "  first color");
    }
  };

  function changeColor() {
    let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    let newColor2 = "#" + randomColor2;
    // box1.backgroundColor = newColor;
    setBox({ backgroundColor: newColor2, padding: "25px 50px 75px 100px" });

    console.log(newColor2 + "  second color");
    console.log(box1.backgroundColor + "  box color");
  }

  return (
    <div>
      {" "}
      <div style={box1}> </div>
      <div style={box1}> </div>
    </div>
  );
}

export default App;
