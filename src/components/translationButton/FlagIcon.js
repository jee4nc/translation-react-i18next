import React from "react";
import enFlag from "./en.png";
import esFlag from "./es.png";
import chFlag from "./ch.png";

const FlagIcon = ({ countryCode }) => {
  const flag = new Map([
    ["es", esFlag],
    ["en", enFlag],
    ["ch", chFlag],
  ]);
  return (
    <img
      src={flag.get(countryCode)}
      alt={`Flag ${countryCode}`}
      style={{ width: "24px", height: "auto" }}
    />
  );
};

export default FlagIcon;
