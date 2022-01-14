import React, {useState, useEffect} from 'react'
import { getData } from '../components/ClimateService'

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

    return (
        <div id="main-container">
            <p> This will contain stuff</p>
        </div>
        
    )
}

export default MainContainer