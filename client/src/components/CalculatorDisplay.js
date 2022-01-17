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
      <p> You are producing {totalValue.toFixed(3) < 6.125 ? <span id="total-value-low">{totalValue.toFixed(3)}</span> : totalValue.toFixed(3) < 8.000 ? <span id="total-value-average">{totalValue.toFixed(3)}</span> :  <span id="total-value-high">{totalValue.toFixed(3)}</span>} tonnes of CO2 per year. </p>
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
