import React, {useState, useEffect} from 'react';

const Electricity = ({handleElectricityCalculation, climateData}) => {
    const [energyUsage, setEnergyUsage] = useState(4500)

    useEffect(() => {
        handleElectricityCalculation(energyUsage)
    }, [energyUsage])

    const onChange = (eve) => {
        setEnergyUsage(eve.target.value)
    }

    return (
        <>
         <h3>Electricity</h3>
         <p> How much energy do you use per year?</p>
         <input onChange={onChange} type="text" placeholder='4500'></input>
         <span>kWh</span>
        </>
    )
}

export default Electricity