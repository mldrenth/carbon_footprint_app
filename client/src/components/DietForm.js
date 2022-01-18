import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

const DietForm = ({ climateData, handleDietCalculation }) => {
  const [meatServings, setMeatServings] = useState(0);
  const [dairyServings, setDairyServings] = useState(0);
  const [vegServings, setVegServings] = useState(0);


  

  useEffect(() => {
    handleDietCalculation(meatServings, vegServings, dairyServings);
  }, [meatServings, vegServings, dairyServings]);

  const onMeatSelected = (event) => {
    setMeatServings(event.target.value);
    averageMeatCo2(climateData[1].diet[event.target.value]);
  };
  const onDairySelected = (event) => {
    setDairyServings(event.target.value);
    averageDairyCo2(climateData[1].diet[event.target.value]);
  };
  const onVegSelected = (event) => {
    setVegServings(event.target.value);
    averageVegCo2(climateData[1].diet[event.target.value]);
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
    <form id="diet-form">
      <h2 id="diet-header">Diet</h2>
      <p>Servings per week of meat, fish, eggs</p>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="meat-servings"
        onChange={onDietSelected}
        type="range"
        color="success"
        min={0}
        max={14}
        step={1}
        defaultValue={0}
      ></Slider>
      <br/> 
      <p>Servings per week of dairy</p>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="dairy servings"
        onChange={onDietSelected}
        type="range"
        color="success"
        min={0}
        max={14}
        step={1}
        defaultValue={0}
      ></Slider>
      <br/> 
      <p>Servings per week of fruit, vegetables</p>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="dairy servings"
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
