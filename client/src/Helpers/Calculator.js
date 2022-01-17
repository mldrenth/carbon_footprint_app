export const calculateElectricityValue = (electricityUsage) =>
  (electricityUsage / 1000) * 0.309;

export const calculateCarValue = (carType, carMileage, carNumber) =>
  ((carType / 1000) * carMileage) * carNumber;

export const calculateDietValue = (dietType) => dietType / 1000;

export const calculateFlightValue = (
  numDomestic,
  numShortHaul,
  numLongHaul,
  co2Domestic,
  co2ShortHaul,
  co2LongHaul
) =>
  (numDomestic * co2Domestic +
    numShortHaul * co2ShortHaul +
    numLongHaul * co2LongHaul) /
  1000;

export const calculateTotalValue = (
  electricityValue,
  carValue,
  dietValue,
  flightValue
) => electricityValue + carValue + dietValue + flightValue;
