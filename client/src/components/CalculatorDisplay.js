import React from "react";
import FootprintChart from "./FootprintChart";
import './CalculatorDisplay.css'
const CalculatorDisplay = ({
  electricityValue,
  carValue,
  dietValue,
  flyingValue,
  totalValue,
}) => {
  return (
    <div id="calculator-display-container">
      <h2>Your Score:</h2>
      <p> You are producing <span>{totalValue.toFixed(3)}</span> tonnes of CO2 per year. </p>
      <h2>Your Score is calculated out of the following:</h2>
      <FootprintChart
        electricityValue={electricityValue}
        carValue={carValue}
        dietValue={dietValue}
        flyingValue={flyingValue}
      />
    </div>
  );
};

export default CalculatorDisplay;
