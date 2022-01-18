import { useEffect, useState } from "react";

const CarForm = ({ climateData, handleCarCalculation }) => {
  const [co2PerMile, setCo2PerMile] = useState(0.295);
  const [yearlyMileage, setYearlyMileage] = useState(7800);
  const [fuelType, setFuelType] = useState("petrol");
  const [carSize, setCarSize] = useState("medium");
  const [carNumber, setCarNumber] = useState(0);

  useEffect(() => {
    handleCarCalculation(co2PerMile, yearlyMileage, carNumber);
  }, [co2PerMile, yearlyMileage, carNumber]);

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

  const onNumSelected = (evt) => {
    setCarNumber(evt.target.value);
    {
      console.log(carNumber);
    }
  };

  return (
    <div id="car-form">
      <h2 id="car-header">Transport</h2>
      <label htmlFor="car-number">Number of cars </label>
      <input
        id="car-number"
        min={0}
        type="number"
        value={carNumber}
        onChange={onNumSelected}
      />
      <br />
      <label htmlFor="fuel-type">Fuel type </label>
      <select id="fuel-type" onChange={onFuelSelected}>
        <option value="petrol">Petrol (standard)</option>
        <option value="diesel">Diesel</option>
      </select>
      <br />
      <label htmlFor="car-size">Car size </label>
      <select id="car-size" onChange={onSizeSelected}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <br />
      <label htmlFor="milesPerYear">Yearly mileage </label>
      <input
        step={100}
        id="milesPerYear"
        type="number"
        value={yearlyMileage}
        onChange={onMileageChange}
      />
    </div>
  );
};

export default CarForm;
