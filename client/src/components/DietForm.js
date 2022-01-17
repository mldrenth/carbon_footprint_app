import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

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
      value: "14",
      label: "14",
    },
    {
      value: "12",
      label: "12",
    },
    {
      value: "10",
      label: "10",
    },
    {
      value: "8",
      label: "8",
    },
    {
      value: "6",
      label: "6",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "0",
      label: "0",
    },
  ];

  return (
    <form id="diet-form" onChange={onDietSelected}>
      <h2 id="diet-header">Diet</h2>
      <p>Servings per week of meat</p>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="energy-input"
        onChange={onDietSelected}
        type="range"
        color="success"
        min={0}
        max={14}
        step={1}
        defaultValue={0}
      ></Slider>
    </form>
  );
};

export default DietForm;
