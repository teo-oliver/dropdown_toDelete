import React from "react";
import CabinIcon from "./CabinIcon";
import UnderConstIcon from "./UnderConstIcon";

const Icon = ({ name }) => {
  switch (name) {
    case "cabin":
      return <CabinIcon />;
    case "construction":
      return <UnderConstIcon />;
    default:
      // placeholder
      return <div />;
  }
};

export default Icon;
