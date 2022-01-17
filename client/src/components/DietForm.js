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
      <h2 id="diet-header">Diet</h2>
      <input
        type="radio"
        name="dietType"
        id="high-meat"
        value="highMeat"
        required
      />
      <label htmlFor="high-Meat">High 100g</label>
      <input
        class="dietRadio"
        type="radio"
        name="dietType"
        id="medium-meat"
        value="mediumMeat"
        required
      />
      <label htmlFor="medium-Meat">Medium 30-60g</label>
      <br />

      <input
        class="dietRadio"
        type="radio"
        name="dietType"
        id="low-meat"
        value="lowMeat"
        required
      />
      <label htmlFor="low-meat">Low 0-30g</label>

      <input
        class="dietRadio"
        type="radio"
        name="dietType"
        id="vegetarian"
        value="vegetarian"
        required
      />
      <label htmlFor="vegetarian">Vegetarian</label>

      <input
        class="dietRadio"
        type="radio"
        name="dietType"
        id="vegan"
        value="vegan"
        required
        defaultChecked="true"
      />
      <label htmlFor="vegan">Vegan</label>
    </form>
  );
};

export default DietForm;
