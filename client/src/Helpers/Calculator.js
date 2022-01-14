
export const calculateElectricityValue = (electricityUsage) => (electricityUsage * 0.309) /1000; 

export const calculateCarValue = (carType, carMilage) => carType * carMilage;

// export const calculateDietValue = (dietType) =>  dietType.value;

export const calculateFlightValue = (flightType, numberOfFlights) => (flightType * 2) * numberOfFlights;

export const calculateTotalValue = (electricityValue, carValue, dietValue, flightValue) => electricityValue + carValue + dietValue + flightValue
