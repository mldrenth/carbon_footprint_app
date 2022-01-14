const Car = () => {

    const onChange = (evt) => {
        //will call a function which will be passed down
        //function(evt.target.value)
    }

    return(
        <div>
            <h3>How many miles do you drive per year?</h3>
            <p>The average UK family drives 7800 miles per year</p>
            <p>Could add dropdown for fuel type and size/efficiency here</p>
            <label for="milesPerYear">X (from state) miles per year:</label>
            <br/>
            <input type="number" value="7800" onChange={onChange}/>
        </div>
    );
};

export default Car;