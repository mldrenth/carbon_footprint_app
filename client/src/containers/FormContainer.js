import { useEffect, useState } from "react";
import Car from "../components/Car";
import Electricity from "../components/Electricity";
import DietForm from "../components/DietForm";
import FlightForm from "../components/FlightForm";

const FormContainer = ({
  handleCarCalculation,
  climateData,
  handleDietCalculation,
  handleElectricityCalculation,
  handleFlightCalculation,
}) => {
  return (
    <div>
      <Electricity
        handleElectricityCalculation={handleElectricityCalculation}
        climateData={climateData}
      />
      <Car
        handleCarCalculation={handleCarCalculation}
        climateData={climateData}
      />
      <DietForm
        climateData={climateData}
        handleDietCalculation={handleDietCalculation}
      />
      <FlightForm
        climateData={climateData}
        handleFlightCalculation={handleFlightCalculation}
      />
    </div>
  );
};

export default FormContainer;
