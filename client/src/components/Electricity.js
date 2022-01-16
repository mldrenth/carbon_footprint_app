import React, { useState, useEffect } from "react";

const Electricity = ({ handleElectricityCalculation, climateData }) => {
    const [energyUsage, setEnergyUsage] = useState(4500);

    useEffect(() => {
        handleElectricityCalculation(energyUsage);
    }, [energyUsage]);

    const onChange = (eve) => {
      return (eve.target.value > 0 ? setEnergyUsage(eve.target.value) : null);
    };

    return (
        <>
            <h3>Electricity</h3>
            <p> How much energy do you use per year?</p>
            <input id="electricity-input" onChange={onChange} type="number" min={0} step={100} placeholder="4500" ></input>
            <span> kWh </span>
        </>
    );
};

export default Electricity;
