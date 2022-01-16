import Car from '../components/Car';
import Electricity from '../components/Electricity';
import { useEffect, useState } from 'react';
import DietForm from '../components/DietForm'

const FormContainer = ({ handleCarCalculation, climateData, handleDietCalculation, handleElectricityCalculation }) => {


    // const [carData, setCarData] = useState({});
    //create states for other data types here

    // useEffect(() => {
    //     setCarData(climateData[0]);
    //     console.log(climateData[0]);
    //     //can unpack other data types from API here
    // }, []);

    return(
        <div>
            <Electricity
            handleElectricityCalculation={handleElectricityCalculation}
            climateData={climateData}/>
            <Car
            handleCarCalculation={handleCarCalculation}
            climateData={climateData}
            />
            <DietForm climateData={climateData} handleDietCalculation={handleDietCalculation} />
        </div>
    );
};

export default FormContainer;