import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { Menu } from "@mui/material";

const Car = ({ climateData, handleCarCalculation }) => {
  const [co2PerMile, setCo2PerMile] = useState(0);
  const [yearlyMileage, setYearlyMileage] = useState(0);
  const [fuelType, setFuelType] = useState(null);
  const [carSize, setCarSize] = useState(null);
  // const [carNumber, setCarNumber] = useState(0);
  const [hasCar, setHasCar] = useState(false);

  useEffect(() => {
    handleCarCalculation(co2PerMile, yearlyMileage);
  }, [co2PerMile, yearlyMileage, hasCar]);

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

  const onHasCarSelected = (evt) => {
    setHasCar(evt.target.value)
    if (evt.target.value) {
      setYearlyMileage(7800)
      setFuelType('petrol')
      setCarSize('medium')
      setCo2PerMile(0.29)
    }
    else {
      setYearlyMileage(0)
    }
  }

  // const onNumSelected = (evt) => {
  //   setCarNumber(evt.target.value);
  //   { console.log(carNumber) }
  // };

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 7800,
      label: 'Average UK Family'
    },
    {
      value: 30000,
      label: '30000'
    }
  ];

  return (
    <div id="car-form">
      <h2 id="car-header">Transport</h2>
      <InputLabel htmlFor="car-number"> Do you own a car? </InputLabel>
      <Select
        id="car-number"
        min={0}
        type="number"
        value={hasCar}
        onChange={onHasCarSelected}
        size="small"
        color="success"
      >
        <MenuItem value={true}>Yes</MenuItem>
        <MenuItem value={false}>No</MenuItem>
      </Select>
      <br />
      {hasCar ? <div id="car-questions-div">
        <div id="car-options">
          <FormControl fullwidth>
          <div id="fuel-type-div">
        <InputLabel htmlFor="fuel-type" color="success">Fuel type </InputLabel>
        <Select size="small" id="fuel-type" onChange={onFuelSelected} value={fuelType} color="success" label="Fuel Type">
          <MenuItem value="petrol">Petrol (standard)</MenuItem>
          <MenuItem value="diesel">Diesel</MenuItem>
        </Select>
        </div>
        </FormControl>
        <FormControl>
        <div id="car-size-div">
        <InputLabel htmlFor="car-size" color="success">Car size </InputLabel>
        <Select size="small" id="car-size" onChange={onSizeSelected} value={carSize} color="success" label="Car Size">
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
        </Select>
        
        </div>
        </FormControl>
        </div>
        <br />
        <InputLabel htmlFor="milesPerYear">Yearly mileage </InputLabel>
        <Slider
        marks={marks}
        size="small"
        valueLabelDisplay="auto"
        color="success"
          step={500}
          min={0}
          max={30000}
          id="milesPerYear"
          type="number"
          value={yearlyMileage}
          onChange={onMileageChange}
        />
      </div> : null}
    </div>
  );
};

export default Car;
