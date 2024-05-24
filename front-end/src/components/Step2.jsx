import { Button } from "@mui/material";
import React from "react";

const Step2 = ({ data, setData, nextStep }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>hell from step 2</h1>
      <form action="">
        <h1>Select vehicleType</h1>
        <label htmlFor="two wheelers">Two Wheelers</label>
        <input
          type="radio"
          name="vehicleType"
          onChange={handleChange}
          value={"two wheelers"}
        />
        <label htmlFor="four wheeler">Four Wheelers</label>
        <input
          type="radio"
          name="vehicleType"
          onChange={handleChange}
          value={"four wheelers"}
        />
        <Button onClick={nextStep}>Next</Button>
      </form>
    </div>
  );
};

export default Step2;
