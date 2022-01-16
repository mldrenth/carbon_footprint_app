import React from 'react';
import FootprintChart from './FootprintChart';
const CalculatorDisplay = ({electricityValue, carValue, dietValue, flyingValue, totalValue}) => {
    

    return (
        <div>
            <h2>Your Score:</h2>
            <p>Total Value: {totalValue.toFixed(3)} tonnes of CO2 per year </p>
            <h2>Your Score is calculated out of the following:</h2>
            <FootprintChart
            electricityValue={electricityValue}
            carValue={carValue}
            dietValue={dietValue}
            flyingValue={flyingValue}/>
        </div>
    )    
}

export default CalculatorDisplay