import React from "react";
import "./Accordion.css";
const Accordion = props => {
  return (
    <div className="accordion__section">
      <button className="accordion">
        <p className="accordion__title">{props.title}</p>
      </button>
      <div className="accordion_content">
        <div
          className="accordion_text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
