import { useState } from 'react';

const Car = ({ climateData, handleCarCalculation }) => {

    const [co2PerMile, setCo2PerMile] = useState(0);
    const [yearlyMileage, setYearlyMileage] = useState(7800);

    const onChange = (evt) => {
        setYearlyMileage(evt.target.value)
    }

    const onSelected = (evt) => {
        const carType = evt.target.value
        setCo2PerMile(climateData[0].drivingKgCO2ePerMile[carType])
    }

    return(
        <div>
            <h3>How many miles do you drive per year?</h3>
            <p>The average UK family drives 7800 miles per year</p>
            <select onChange={onSelected}>
                <option value={0}></option>
                <option value={'averageUKFamilyCar'}>average car</option>
            </select>
            <label htmlFor="milesPerYear">X (from state) miles per year:</label>
            <br/>
            <input type="number" value={yearlyMileage} onChange={onChange}/>
        </div>
    );
};

export default Car;