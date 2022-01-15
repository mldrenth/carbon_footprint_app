import React, { useState, useEffect } from 'react'
import { getData } from '../components/ClimateService'
import { calculateCarValue, calculateElectricityValue, calculateFlightValue, calculateTotalValue } from '../Helpers/Calculator'
import FormContainer from './FormContainer'
import CalculatorDisplay from '../components/CalculatorDisplay'
import './MainContainer.css'


const MainContainer = () => {
    const [climateData, setClimateData] = useState([])
    const [electricityValue, setElectricityValue] = useState(0)
    const [carValue, setCarValue ] = useState(0)
    const [dietValue, setDietValue] = useState(0)
    const [flyingValue, setFlyingValue] = useState(0)
    const [totalValue, setTotalValue] = useState(0)

    useEffect(() => {
        getData().then((climateData) => {
            setClimateData(climateData);
        });
    }, []);

    const handleElectricityCalculation = (electricityUsage) => {
        const newElectricityValue = calculateElectricityValue(electricityUsage)
        setElectricityValue(newElectricityValue)
    }

    const handleCarCalculation = (carType, carMileage) => {
        const newCarValue = calculateCarValue(carType, carMileage)
        setCarValue(newCarValue)
        console.log(carValue)
    }
    

    const handleDietCalculation = (dietType) => {
        setDietValue(dietType)
    }

    const handleFlyingCalculation = (flightType, numberOfFlights) => {
        const newFlyingValue = calculateFlightValue(flightType, numberOfFlights)
        setFlyingValue(newFlyingValue)
    }

    const handleTotalCalculation = () => {
        const newTotal = electricityValue + carValue + dietValue + flyingValue
        setTotalValue(newTotal)
    }

    return (
        <div id="main-container">
            <FormContainer 
            handleElectricityCalculation={handleElectricityCalculation}
            handleCarCalculation={handleCarCalculation} 
            handleDietCalculation={handleDietCalculation}
            handleFlyingCalculation={handleFlyingCalculation}
            handleTotalCalculation={handleTotalCalculation}
            climateData={climateData} />
        <CalculatorDisplay/>
        </div>

    )
}

export default MainContainer