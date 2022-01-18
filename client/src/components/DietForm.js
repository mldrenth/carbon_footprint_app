import { useState, useEffect } from "react";

const DietForm = ({ climateData, handleDietCalculation, dietType, selectedDiet, handleDietSelected }) => {
  

  const onDietSelected = (event) => {
    handleDietSelected(event)
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
