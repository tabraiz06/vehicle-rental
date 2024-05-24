// src/components/Step1.js
import React from "react";
import { TextField, Button } from "@mui/material";

const Step1 = ({ data, setData, nextStep }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex flex-col w-[40%] h-[500px] items-center justify-center">
        <TextField
          className="w-full"
          label="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          aria-required
        />
        <TextField
          className="w-full"
          label="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          aria-required
        />
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  );
};

export default Step1;
