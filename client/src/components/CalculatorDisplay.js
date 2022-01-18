import React from "react";
import FootprintChart from "./FootprintChart";
import "./CalculatorDisplay.css";
const CalculatorDisplay = ({
  electricityValue,
  carValue,
  dietValue,
  flyingValue,
  totalValue,
}) => {
  const averageAmerican = 15.2;
  const averageIndian = 1.8;
  const averagePolish = 8.2;

  const compareAverage = (total, average) => {
    let percentage = 0;
    if (total >= average) {
      const increase = total - average;
      return (percentage = ((increase / average) * 100).toFixed(2));
    } else {
      const decrease = average - total;
      return (percentage = ((decrease / average) * 100).toFixed(2));
    }
  };

  const americanComparison = compareAverage(totalValue, averageAmerican);
  const indianComparison = compareAverage(totalValue, averageIndian);
  const polishComparison = compareAverage(totalValue, averagePolish);

  return (
    <div id="calculator-display-container">
      <h2>Your Score:</h2>
      <p>
        {" "}
        You are producing{" "}
        {totalValue.toFixed(3) < 6.125 ? (
          <span id="total-value-low">{totalValue.toFixed(3)}</span>
        ) : totalValue.toFixed(3) < 8.0 ? (
          <span id="total-value-average">{totalValue.toFixed(3)}</span>
        ) : (
          <span id="total-value-high">{totalValue.toFixed(3)}</span>
        )}{" "}
        tonnes of CO2 per year.{" "}
      </p>
      <br />
      <p>
        Compared to the average American person you are producing{" "}
        {totalValue >= averageAmerican ? (
          <span id="span-more">{americanComparison}% more</span>
        ) : (
          <span id="span-less">{americanComparison}% less</span>
        )}{" "}
        CO2 per year.{" "}
      </p>
      <br />
      <p>
        Compared to the average Indian person you are producing{" "}
        {totalValue >= averageIndian ? (
          <span id="span-more">{indianComparison}% more</span>
        ) : (
          <span id="span-less">{indianComparison}% less</span>
        )}{" "}
        CO2 per year.{" "}
      </p>
      <br />
      <p>
        Compared to the average Polish person you are producing{" "}
        {totalValue >= averagePolish ? (
          <span id="span-more">{polishComparison}% more</span>
        ) : (
          <span id="span-less">{polishComparison}% less</span>
        )}{" "}
        CO2 per year.{" "}
      </p>
      <br />
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
