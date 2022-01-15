import { useState, useEffect } from "react";

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

  return (
    <form id="diet-form" onChange={onDietSelected}>
      <input
        type="radio"
        name="dietType"
        id="high-meat"
        value="highMeat" //find a way to use api
        required
      />
      <label for="highMeat">High 100g</label>

      <input
        type="radio"
        name="dietType"
        id="medium-meat"
        value="mediumMeat"
        required
      />
      <label for="medium-Meat">Medium 30-60g</label>

      <input
        type="radio"
        name="dietType"
        id="low-meat"
        value="lowMeat"
        required
      />
      <label for="low-meat">Low 0-30g</label>

      <input
        type="radio"
        name="dietType"
        id="vegetarian"
        value="vegetarian"
        required
      />
      <label for="vegetarian">Vegetarian</label>

      <input
        type="radio"
        name="dietType"
        id="vegan"
        value="vegan"
        required
        defaultChecked="true"
      />
      <label for="vegan">Vegan</label>
    </form>
  );
};

export default DietForm;
