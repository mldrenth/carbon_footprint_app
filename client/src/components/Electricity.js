import React, { useState, useEffect } from "react";

const Electricity = ({ handleElectricityCalculation, climateData }) => {
  const [energyUsage, setEnergyUsage] = useState(4500);

  useEffect(() => {
    handleElectricityCalculation(energyUsage);
  }, [energyUsage]);

  const onChange = (eve) => {
    return eve.target.value > 0 ? setEnergyUsage(eve.target.value) : null;
  };

  return (
    <div id="energy-form">
      <h2 id="energy-header">Electricity</h2>
      <p id="energy-q"> How much energy do you use per year?</p>
      <input
        id="energy-input"
        onChange={onChange}
        type="number"
        min={0}
        step={100}
        placeholder="4500"
      ></input>
      <span id="energy-kwh"> kWh </span>
    </div>
  );
};

export default Electricity;
