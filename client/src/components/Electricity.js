import React, { useState, useEffect } from "react";
import Slider from '@mui/material/Slider'



const Electricity = ({ handleElectricityCalculation, climateData }) => {
  const [energyUsage, setEnergyUsage] = useState(4500);

  useEffect(() => {
    handleElectricityCalculation(energyUsage);
  }, [energyUsage]);

  const onChange = (eve) => {
    return eve.target.value > 0 ? setEnergyUsage(eve.target.value) : null;
  };



  

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 3000,
      label: '3000'
    },
    {
      value: 4500,
      label: '4500',
    },
    {
      value: 7000,
      label: '7000',
    },
    {
      value: 10000,
      label: '10000'
    }
  ];

  return (
    <div id="energy-form">
      <h2 id="energy-header">Electricity</h2>
      <p id="energy-q"> How much energy do you use per year? (in kWh)</p>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={marks}
        id="energy-input"
        onChange={onChange}
        type="range"
        color="success"
        min={0}
        max={10000}
        step={500}
        defaultValue={4500}
      ></Slider>
    </div>
  );
};

export default Electricity;
