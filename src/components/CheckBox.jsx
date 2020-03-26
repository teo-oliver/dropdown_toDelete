import React from "react";

const CheckBox = ({ name, value, icon }) => {
  return (
    <div>
      <input type="checkbox" id="vehicle1" name={name} value={value} />
      <label for="vehicle1">
        <Icon icon={icon} />
      </label>
    </div>
  );
};

export default CheckBox;
