import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(1000);
  const [errorMessage, setErrorMessage] = useState("");

  /* function for increasing counter */
  const increaseCounter = () => {
    let val = parseInt(counter);
    if (isNaN(val))
      setCounter(1);
    else if (val < minValue) {
      setCounter(minValue);
    }

    if (val < maxValue && val >= minValue) {
      setCounter(val + 1);
    }
  }

  /* function for decreasing counter */
  const decreaseCounter = () => {
    if (isNaN(parseInt(counter)))
      setCounter(1);

    if (parseInt(counter) < minValue) {
      setCounter(minValue);
    }

    if (parseInt(counter) > minValue)
      setCounter(parseInt(counter) - 1);
  }

  /* function to set counter when typing manually */
  const handleChange = (event) => {
    console.log(event.target.value);
    let val = parseInt(event.target.value);
    if (val <= maxValue) {
      setCounter(val);
    } else if (isNaN(val) || val === "") {
      setCounter(NaN);
    }
  }

  /* Checking and assigning Minimum value */
  const handleMinValue = (event) => {
    let val = parseInt(event.target.value);

    // Check if NaN this would occur when you type a value and afterwards change it and leave it as blank.
    if (isNaN(val)) {
      val = 0;
    }

    if (val <= maxValue) {
      setMinValue(val);
      setCounter(val);
      setErrorMessage("");
    } else {
      setErrorMessage("Min value cannot be greater than Max value.");
    }
  }

  /* Checking and assigning Maximum value */
  const handleMaxValue = (event) => {
    let val = parseInt(event.target.value);

    // Check if NaN this would occur when you type a value and afterwards change it and leave it as blank.
    if (isNaN(val)) {
      val = 1000;
    }

    if (val >= minValue) {
      setMaxValue(val);
      if (errorMessage) {
        setErrorMessage("");
      }
    } else {
      setErrorMessage("Max Value should be greater than or equal to Min value");
    }
  }

  return (
    <div className="App">
      <div className="setMinMax">
        <div className="initialize">
          <label>Enter Minimum Value</label><br />
          <input className="initialValue" type="number" onChange={handleMinValue} />
        </div>
        <div className="initialize">
          <label>Enter Maximum Value</label><br />
          <input className="initialValue" type="number" onChange={handleMaxValue} />
        </div>
      </div>
      <p className="errorMessage">{errorMessage}</p>
      <div className="counter">
        <button className="decBtn" onClick={decreaseCounter}>-</button>
        <input className="displayCounter" type="number" value={counter} onChange={handleChange} />
        <button className="incBtn" onClick={increaseCounter}>+</button>
      </div>
      <p>Default Minimum: 1 and Maximum: 1000. The Minimum and Maximum values can be changed using the textbox provided.</p>
    </div>
  );
}

export default App;
