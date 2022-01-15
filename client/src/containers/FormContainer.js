import Car from '../components/Car';
import Electricity from '../components/Electricity';
import { useEffect, useState } from 'react';

const FormContainer = ({handleElectricityCalculation, handleCarCalculation, climateData }) => {

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
        </div>
    );
};

export default FormContainer;