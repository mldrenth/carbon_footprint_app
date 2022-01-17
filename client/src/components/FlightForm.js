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
    <form id="flight-form">
      <h3 id="flight-header" >How often fo you fly?</h3>
      <label htmlFor="domestic">Domestic Flights </label>
      <input id="domestic"  type="number" value={numDomestic} onChange={onDomesticChange} min={0}/>
      <label htmlFor="shortHaul">Short Haul Flights </label>
      <input id="shortHaul"  type="number" value={numShortHaul} min={0} onChange={onShortChange} />
      <label htmlFor="longHaul">Long Haul Flights </label>
      <input id="longHaul"  min={0} type="number" value={numLongHaul} onChange={onLongChange} />
    </form>
  );
};

export default FlightForm;
