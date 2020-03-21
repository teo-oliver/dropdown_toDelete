import React from "react";
import Radio from "./Radio";
import Input from "./Input";

const Question = props => {
  const componentList = {
    radio: Radio,
    input: Input
  };

  const Component = componentList[props.type];

  return (
    <div>
      <Component />
    </div>
  );
};

export default Question;
