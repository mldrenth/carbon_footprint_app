import { useEffect, useState } from 'react';

const Car = ({ climateData, handleCarCalculation }) => {

    const [co2PerMile, setCo2PerMile] = useState(0.295);
    const [yearlyMileage, setYearlyMileage] = useState(7800);
    const [fuelType, setFuelType] = useState('petrol');
    const [carSize, setCarSize] = useState('medium')

    const onMileageChange = (evt) => {
        setYearlyMileage(evt.target.value);
        // handleCarCalculation(co2PerMile, yearlyMileage);
    }

    const onFuelSelected = (evt) => {
        const selectedFuel = evt.target.value;
        setFuelType(evt.target.value);
        setCo2PerMile(climateData[0].drivingKgCO2ePerMile[selectedFuel][carSize]);
        // handleCarCalculation(co2PerMile, yearlyMileage);
    }

    const onSizeSelected = (evt) => {
        const selectedSize = evt.target.value;
        setCarSize(evt.target.value);
        setCo2PerMile(climateData[0].drivingKgCO2ePerMile[fuelType][selectedSize]);
        // handleCarCalculation(co2PerMile, yearlyMileage);
    }

    return(
        <div>
            <h3>How many miles do you drive per year?</h3>
            <p>The average UK family drives 7800 miles per year</p>
            <label>Select your fuel type </label>
            <select onChange={onFuelSelected}>
                <option value="petrol">Petrol (standard)</option>
                <option value="diesel">Diesel</option>
            </select>
            <br/>
            <label>Select your car size </label>
            <select onChange={onSizeSelected}>
                <option value="medium">Average UK Family Car</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <br/>
            <label htmlFor="milesPerYear">Enter your yearly mileage </label>
            <input type="number" value={yearlyMileage} onChange={onMileageChange}/>
            <p>{co2PerMile}</p>
        </div>
    );
};

export default Car;