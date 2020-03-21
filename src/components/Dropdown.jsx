import React, { useState } from "react";
import Icon from "./icons/index";

const Dropdown = ({ options, width, name }) => {
  const [optionsState, setOptionsState] = useState(options || []);
  const [showItems, setShowItems] = useState(false);
  const [selectItem, setSelectItem] = useState(options && options[0]); //change to selectedItem

  const dropdown = () => {
    setShowItems(!showItems);
  };

  //change to selectItem
  const selectedItem = item => {
    setSelectItem(item);
    setShowItems(false);
  };

  return (
    <>
      <div className="Dropdown">
        <div className="icon">
          <Icon name="cabin" />
        </div>
        <div className="select-box--box" style={{ width: width || 180 }}>
          <div className="select-box--container">
            <div className="select-box--selected-item">{selectItem.value}</div>
            <div className="select-box--arrow" onClick={dropdown}>
              <span
                className={`${
                  showItems ? "select-box--arrow-top" : "select-box--arrow-down"
                }`}
              ></span>
            </div>
            <div
              className="select-box--items"
              style={{ display: showItems ? "block" : "none" }}
            >
              {optionsState.map(option => (
                <div
                  key={option.id}
                  onClick={() => selectedItem(option)}
                  className={selectItem === option ? "selected" : ""}
                >
                  {option.value}
                </div>
              ))}
            </div>
          </div>
        </div>
        <input type="hidden" value={selectItem.id} name={name} />
      </div>
    </>
  );
};

export default Dropdown;
