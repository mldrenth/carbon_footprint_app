use climateProject_db;
db.dropDatabase();

db.climateData.insertMany(
    [
        {
            drivingKgCO2ePerMile: {
                averageUKFamilyCar: 0.295,
                diesel: {
                    small: 0.22,
                    medium: 0.25,
                    large: 0.28
                },
                petrol: {
                    small: 0.27,
                    medium: 0.31,
                    large: 0.35
                },
                electric: {
                    lowEfficiency: 0.12,
                    mediumEfficiency: 0.10,
                    highEfficiency: 0.08
                }
            }
        },
        {
            diet: { //KgCO2ePerYear
                vegan: 1056,
                vegetarian: 1392,
                lowMeat: 1706,
                mediumMeat: 2056,
                highMeat: 2626
            }
        },
        {
            electricityKgCO2ePerKWh: {
                average: 0.309
            }
        },
        {
            gasKgCO2ePerKWh: {
                average: 0.203
            }
        },
        {
            flights: { //KgCO2e
                domestic: 180,
                shortHaul: 260,
                longHaul: 960
            }
        }
    ]
);