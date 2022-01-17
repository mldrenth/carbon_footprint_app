import { useEffect, useState } from "react";

const Car = ({ climateData, handleCarCalculation }) => {
  const [co2PerMile, setCo2PerMile] = useState(0.295);
  const [yearlyMileage, setYearlyMileage] = useState(7800);
  const [fuelType, setFuelType] = useState("petrol");
  const [carSize, setCarSize] = useState("medium");

  useEffect(() => {
    handleCarCalculation(co2PerMile, yearlyMileage);
  }, [co2PerMile, yearlyMileage]);

  const onMileageChange = (evt) => {
    setYearlyMileage(evt.target.value);
  };

  const onFuelSelected = (evt) => {
    const selectedFuel = evt.target.value;
    setFuelType(evt.target.value);
    setCo2PerMile(climateData[0].drivingKgCO2ePerMile[selectedFuel][carSize]);
  };

  const onSizeSelected = (evt) => {
    const selectedSize = evt.target.value;
    setCarSize(evt.target.value);
    setCo2PerMile(climateData[0].drivingKgCO2ePerMile[fuelType][selectedSize]);
  };

  return (
    <div id="car-form">
      <h2 id="car-header">Transport</h2>
      <label htmlFor="fuel-type">Select your fuel type </label>
      <select id="fuel-type" onChange={onFuelSelected}>
        <option value="petrol">Petrol (standard)</option>
        <option value="diesel">Diesel</option>
      </select>
      <br />
      <label htmlFor="car-size">Select car size </label>
      <select id="car-size" onChange={onSizeSelected}>
        <option value="medium">Average UK Family Car</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <br />
      <label htmlFor="milesPerYear">Enter your yearly mileage </label>
      <input
        id="milesPerYear"
        type="number"
        value={yearlyMileage}
        onChange={onMileageChange}
      />
      <p>{co2PerMile}</p>
    </div>
  );
};

export default Car;
