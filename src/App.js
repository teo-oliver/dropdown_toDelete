import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/styles.css";

import { data } from "./data";
import Question from "./components/Question";
import Dropdown from "./components/Dropdown";
import Icon from "./components/icons/index";
import ToggleSwitch from "./components/ToggleSwitch";
import Helper from "./components/Helper";
import ProgressBarTiles from "./components/ProgressBarTiles";
import PropgressBar from "./components/PropgressBar";
import Accordion from "./components/Accordion";


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
        {/* {generator.next().value} */}
        {/* <button onClick={() => generator.next()}>NEXT</button> */}
        <button onClick={() => prevStep()}>PREV</button>
        <button onClick={() => nextStep()}>NEXT</button>
      </div>
      <div className="dropbox">
        <Dropdown
          options={[
            { value: "Teo", id: "1111" },
            { value: "Jose", id: "2222" },
            { value: "Fernando", id: "333" },
            { value: "Joyce", id: "444" }
          ]}
          width={200}
          name="dropdown"
        />
      </div>
      <hr />
      <ToggleSwitch />

      <hr />

      <Helper />

      <hr />

      <PropgressBar />

      <hr />

      <Accordion title="Title 1" content="voluptatibus numquam fuga nisi doloremque itaque ipsa, maiores neque iure, aliquid laborum quos consequuntur ducimus velit doloribus quaerat cum! Aliquam, quibusdam?" />
    </>
  );
}

export default App;
