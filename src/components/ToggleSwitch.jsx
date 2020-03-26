import React, { useState } from "react";

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = e => {
    setChecked(e.target.checked);
    console.log(checked);
  };

  return (
    <div className="ToggleSwitch">
      <input
        type="checkbox"
        id="switch"
        checked={checked}
        onChange={e => handleCheck(e)}
      />
      <label for="switch">Toggle</label>
    </div>
  );
};

export default ToggleSwitch;
