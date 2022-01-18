import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

const DietForm = ({ climateData, handleDietCalculation, meatServings, dairyServings, vegServings, averageMeatCo2, averageDairyCo2, averageVegCo2, handleMeatSelected, handleDairySelected, handleVegSelected }) => {
  // const [meatServings, setMeatServings] = useState(0);
  // const [dairyServings, setDairyServings] = useState(0);
  // const [vegServings, setVegServings] = useState(0);
  // const [averageMeatCo2, setAverageMeatCo2] = useState(0);
  // const [averageDairyCo2, setAverageDairyCo2] = useState(0);
  // const [averageVegCo2, setAverageVegCo2] = useState(0);

  // useEffect(() => {
  //   handleDietCalculation(meatServings, vegServings, dairyServings, averageMeatCo2, averageVegCo2, averageDairyCo2);
  // }, [meatServings, vegServings, dairyServings]);

  const onMeatSelected = (event) => {
    handleMeatSelected(event)
  };
  const onDairySelected = (event) => {
    handleDairySelected(event)
  };
  const onVegSelected = (event) => {
    handleVegSelected(event)
  
  };

  const dietPick = [
    {
      value: 14,
      label: "14",
    },
    {
      value: 12,
      label: "12",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 0,
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
        onChange={onMeatSelected}
        type="range"
        color="success"
        min={0}
        max={14}
        step={1}
        defaultValue={meatServings}
      ></Slider>
      <br />
      <p>Servings per week of dairy</p>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="dairy servings"
        onChange={onDairySelected}
        type="range"
        color="success"
        min={0}
        max={14}
        step={1}
        defaultValue={dairyServings}
      ></Slider>
      <br />
      <p>Servings per week of fruit, vegetables</p>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="dairy servings"
        onChange={onVegSelected}
        type="range"
        color="success"
        min={0}
        max={14}
        step={1}
        defaultValue={vegServings}
      ></Slider>
    </form>
  );
};

export default DietForm;
