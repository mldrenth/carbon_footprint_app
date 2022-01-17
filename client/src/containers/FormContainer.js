import { useEffect, useState } from "react";
import CarForm from "../components/CarForm";
import Electricity from "../components/Electricity";
import DietForm from "../components/DietForm";
import FlightForm from "../components/FlightForm";
import "./FormContainer.css";

const FormContainer = ({
  handleCarCalculation,
  climateData,
  handleDietCalculation,
  handleElectricityCalculation,
  handleFlightCalculation,
}) => {
  return (
    <div id="forms-container">
      <Electricity
        handleElectricityCalculation={handleElectricityCalculation}
        climateData={climateData}
      />
      <DietForm
        climateData={climateData}
        handleDietCalculation={handleDietCalculation}
      />
      <CarForm
        handleCarCalculation={handleCarCalculation}
        climateData={climateData}
      />
      <FlightForm
        climateData={climateData}
        handleFlightCalculation={handleFlightCalculation}
      />
    </div>
  );
};

export default FormContainer;
