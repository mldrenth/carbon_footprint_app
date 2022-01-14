use climateProject_db
db.dropDatabase()

db.climateData.insertMany(
    [
        {
            driving: {
                electric: 0.1,
                diesel: 5
            }
        },
        {
            diet: {
                vegan: 1000,
                vegetarian: 2000,
                meat_eater: 3000
            }
        }
    ]
)