import React, {useState, useEffect} from 'react'
import { getData } from '../components/ClimateService'
import { calculateCarValue } from '../Helpers/Calculator'
import FormContainer from './FormContainer'


const MainContainer = () => {
    const [climateData, setClimateData] = useState([])
    const {electricityValue, setElectricityValue} = useState(0)
    const {carValue, setCarValue} = useState(0)
    const {dietValue, setDietValue} = useState(0)
    const {flyingValue, setFlyingValue} = useState(0)
    const {totalValue, setTotalValue} = useState(0)

    useEffect(() => {
    getData().then((climateData) => {
      setClimateData(climateData);
    });
  }, []);

  const handleCarCalculation = (carType, carMileage) => {
        const newCarValue = calculateCarValue(carType, carMileage)
        setCarValue(newCarValue)
  }

    return (
        <div id="main-container">
            <FormContainer handleCarCalculation={handleCarCalculation} climateData={climateData}/>
        </div>
        
    )
}

export default MainContainer