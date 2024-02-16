import React from "react";
import calcimg from "../SVGS/calcimg.svg";
const CarbonFootPrintCalc = () => {
  const calculateCarbonFootprint = () => {
    // Get values from the form
    const username = document.getElementById("name").value;
    const selectedVehicle = document.getElementById("vehicle").value;
    const distance = parseFloat(document.getElementById("distance").value);
    const ebill = parseFloat(document.getElementById("ebill").value);
    const gbill = parseFloat(document.getElementById("gbill").value);
    const resultElem = document.querySelector(".result");

    // Calculate carbon footprint based on the selected vehicle
    let carbonFootprint = 0;

    switch (selectedVehicle) {
      case "car":
        carbonFootprint = distance * 0.79;
        break;
      case "motorcycle":
        carbonFootprint = distance * 0.182;
        break;
      case "bus":
        carbonFootprint = distance * 0.66;
        break;
      // Add more cases for additional vehicles if needed
      default:
        alert("Invalid vehicle selection");
        return;
    }

    carbonFootprint += ebill * 105;
    carbonFootprint += gbill * 105;
    resultElem.innerHTML = `${username}'s carbon footprint is ${carbonFootprint} metric tons`;
    console.log(carbonFootprint);
  };
  return (
    <div className="calc" id="calcy">
      <img src={calcimg} alt="" />
      <div className="calcfields">
        <div className="calcheader">
          <h1>CARBON FOOTPRINT</h1>
          <h1>CALCULATOR</h1>
        </div>
        <form action="" className="carboncriteria">
          <div className="crit">
            <label for="name">NAME:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              required
            ></input>
          </div>
          <div className="crit critvehicle">
            <label for="vehicle">Select Vehicle:</label>
            <select id="vehicle" name="vehicle">
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="bus">Bus</option>
            </select>
          </div>
          <div className="crit">
            <label for="distance">Distance (in miles):</label>
            <input
              type="number"
              id="distance"
              name="distance"
              placeholder="Enter distance"
              required
            ></input>
          </div>
          <div className="crit">
            <label for="ebill">Electricity Bill:</label>
            <input
              type="number"
              id="ebill"
              name="ebill"
              placeholder="Enter Amount"
              required
            ></input>
          </div>
          <div className="crit">
            <label for="gbill">Gas Bill:</label>
            <input
              type="number"
              id="gbill"
              name="gbill"
              placeholder="Enter Amount"
              required
            ></input>
          </div>
        </form>
        <button
          type="button"
          onClick={calculateCarbonFootprint}
          className="calcbtn"
        >
          Calculate
        </button>
        <h1 className="result"></h1>
      </div>
    </div>
  );
};

export default CarbonFootPrintCalc;
