import { useState, useEffect } from "react";
import Slider from '@mui/material/Slider'

const DietForm = ({ climateData, handleDietCalculation }) => {
  const [dietType, setDietType] = useState("vegan");
  const [selectedDiet, setSelectedDiet] = useState(1056);

  useEffect(() => {
    handleDietCalculation(selectedDiet);
  }, [dietType, selectedDiet]);

  const onDietSelected = (event) => {
    setDietType(event.target.value);
    setSelectedDiet(climateData[1].diet[event.target.value]);
  };

  const dietPick = [
    {
      value: "7",
      label: '7',
    },
    {
      value: "6",
      label: '6'
    },
    {
      value: "5",
      label: '5',
    },
    {
      value: "4",
      label: '4',
    },
    {
      value: "3",
      label: '3'
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "1",
      label: "1",
    },
    {
      value: "0",
      label: "0",
    }
  ];



  return (
    <form id="diet-form" onChange={onDietSelected}>
      <h2 id="diet-header">Diet</h2>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="energy-input"
        onChange={onDietSelected}
        type="range"
        color="success"
        min={0}
        max={7}
        step={1}
        defaultValue={0}
      ></Slider>
      </form>


  );
};

export default DietForm;
