import { useEffect, useState } from "react";
import { Slider, InputLabel } from "@mui/material";

const FlightForm = ({ climateData, handleFlightCalculation }) => {
  const [numDomestic, setNumDomestic] = useState(0);
  const [numShortHaul, setNumShortHaul] = useState(0);
  const [numLongHaul, setNumLongHaul] = useState(0);
  const [co2Domestic, setCo2Domestic] = useState(0);
  const [co2ShortHaul, setCo2ShortHaul] = useState(0);
  const [co2LongHaul, setCo2LongHaul] = useState(0);

  useEffect(() => {
    handleFlightCalculation(
      numDomestic,
      numShortHaul,
      numLongHaul,
      co2Domestic,
      co2ShortHaul,
      co2LongHaul
    );
  }, [
    co2Domestic,
    co2ShortHaul,
    co2LongHaul,
    numDomestic,
    numShortHaul,
    numLongHaul,
  ]);

  const onDomesticChange = (event) => {
    setNumDomestic(event.target.value);
    setCo2Domestic(climateData[4].flights["domestic"]);
  };

  const onShortChange = (event) => {
    setNumShortHaul(event.target.value);
    setCo2ShortHaul(climateData[4].flights["shortHaul"]);
  };

  const onLongChange = (event) => {
    setNumLongHaul(event.target.value);
    setCo2LongHaul(climateData[4].flights["longHaul"]);
  };

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '10'
    },
    {
      value: 20,
      label: '20',
    }
  ];

  return (
    <form id="flight-form">
      <h4 id="flight-header">How often fo you fly? (includes return)</h4>
      <InputLabel htmlFor="domestic">Domestic: </InputLabel>

      <Slider 
        size="small"
        color="success"
        id="domestic"
        valueLabelDisplay="auto"
        value={numDomestic}
        onChange={onDomesticChange}
        min={0}
        max={20}
        marks={marks}
      />
      <br />
      <InputLabel htmlFor="shortHaul">Short Haul: </InputLabel>

      <Slider 
        size="small"
        color="success"
        valueLabelDisplay="auto"
        value={numShortHaul}
        min={0}
        max={20}
        marks={marks}
        onChange={onShortChange}
      />
      <br />
      <InputLabel htmlFor="longHaul">Long Haul: </InputLabel>

      <Slider 
        size="small"
        color="success"
        valueLabelDisplay="auto"
        id="longHaul"
        min={0}
        max={20}
        marks={marks}
        value={numLongHaul}
        onChange={onLongChange}
      />
    </form>
  );
};

export default FlightForm;
