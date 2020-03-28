import React, { useState, useRef } from "react";
import Chevron from './Chevron'

import "./Accordion.css";
const Accordion = props => {

  const [isActive, setIsActive] = useState("")
  const [height, setHeight] = useState("0px");

  const content = useRef(null)

  function toggleAccordion() {
    setIsActive(isActive === "" ? "active" : "")
    setHeight(isActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
  }



  return (
    <div className="accordion__section">
      <button className={`accordion ${isActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron width={10} fill={"#777"} className={`accordion__icon ${isActive}`} />
      </button>
      <div ref={content} style={{ maxHeight: `${height}` }} className="accordion__content">
        <div
          className="accordion__text"
        //change for children
        // dangerouslySetInnerHTML={{ __html: props.content }}
        >{props.content}</div>
      </div>
    </div>
  );
};

export default Accordion;
