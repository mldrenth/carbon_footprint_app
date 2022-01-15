import React from 'react';

const CalculatorDisplay = ({electricityValue, carValue, dietValue, flyingValue, totalValue}) => {
    

    return (
        <div>
            <h2>Your Score:</h2>
            <p>Total Value: {totalValue}</p>
        </div>
    )    
}

export default CalculatorDisplay