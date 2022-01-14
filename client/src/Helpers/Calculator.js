
export const calculateElectricityValue = (electricityUsage) => (electricityUsage * 0.309) /1000; 

export const calculateCarValue = (carType, carMilage) => carType * carMilage;

export const calculateDietValue = (dietType) =>  dietType.value;

export const calculateFlightValue = (flighttype, numberOfFlights) => flighttype.value * numberOfFlights;

export const calculateTotalValue = (electricityValue, carValue, dietValue, flightValue) => electricityValue + carValue + dietValue + flightValue
