
export const calculateElectricityValue = (electricityUsage) => ((electricityUsage / 1000) * 0.309); 

export const calculateCarValue = (carType, carMileage) => (carType / 1000 ) * carMileage;

// export const calculateDietValue = (dietType) =>  dietType 

export const calculateFlightValue = (flightType, numberOfFlights) => ((flightType / 1000) * 2) * numberOfFlights;

export const calculateTotalValue = (electricityValue, carValue, dietValue, flightValue) => electricityValue + carValue + dietValue + flightValue
