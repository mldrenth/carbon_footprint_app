import { useEffect, useState } from "react";

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
  }, [co2Domestic, co2ShortHaul, co2LongHaul, numDomestic, numShortHaul, numLongHaul]);

  const onDomesticChange = (event) => {
    setNumDomestic(event.target.value);
    setCo2Domestic(climateData[4].flights["domestic"]);
    console.log(co2Domestic);
  };

  const onShortChange = (event) => {
    setNumShortHaul(event.target.value);
    setCo2ShortHaul(climateData[4].flights["shortHaul"]);
    console.log(co2ShortHaul);
  };

  const onLongChange = (event) => {
    setNumLongHaul(event.target.value);
    setCo2LongHaul(climateData[4].flights["longHaul"]);
    console.log(co2LongHaul);
  };
  return (
    <div>
      <label>Domestic Flights </label>
      <input type="number" value={numDomestic} onChange={onDomesticChange} min={0}/>
      <label>Short Haul Flights </label>
      <input type="number" value={numShortHaul} min={0} onChange={onShortChange} />
      <label>Long Haul Flights </label>
      <input min={0} type="number" value={numLongHaul} onChange={onLongChange} />
    </div>
  );
};

export default FlightForm;
