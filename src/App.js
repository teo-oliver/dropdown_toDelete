import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/styles.css";
import { data } from "./data";
import Question from "./components/Question";
import ImageUpload from "./components/ImageUpload/ImageUpload";


function App() {

  const [state, setstate] = useState({
    step: 0
  });

  const nextStep = () => {
    const { step } = state;
    if (step + 1 > data.length - 1) {
      return;
    }
    setstate({ ...state, step: state.step + 1 });
  };

  //    Go back to prev step
  const prevStep = () => {
    const { step } = state;
    if (step - 1 < 0) {
      return;
    }
    setstate({ ...state, step: state.step - 1 });
  };

  console.log(data.length);
  console.log(state);

  return (
    <>
      <div className="App">
        <Question type={data[state.step].type} />

        <button onClick={() => prevStep()}>PREV</button>
        <button onClick={() => nextStep()}>NEXT</button>
      </div>
      <hr />
      <ImageUpload />
    </>
  );
}

export default App;
