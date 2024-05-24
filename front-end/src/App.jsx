// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

import Step3 from "./components/Step3";
import { Button } from "@mui/material";

// ... other steps

const App = () => {
  const [step, setStep] = useState(1);
  const [products, setProducts] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    vehicleType: "",
    vehicleName: "",
    vehicleModel: "",
    startDate: null,
    endDate: null,
  });
  console.log(formData.vehicleType);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        alert(result.message);
        setFormData({
          firstName: "",
          lastName: "",
          vehicleType: "",
          vehicleName: "",
          vehicleModel: "",
          startDate: null,
          endDate: null,
        });
        setStep(1);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/vehicle-types");
    const result = await response.json();
    console.log(result);
    setProducts(result);
  };
  useEffect(() => {
    fetchData();
  }, [formData.vehicleName]);
  // console.log(filterItems);
  let filter = [];
  if (formData.vehicleType !== "") {
    products.filter((ele) => {
      if (ele.vehicleType === formData.vehicleType) {
        filter.push(ele);
      }
    });
  }
  console.log(filter);
  return (
    <div className="App">
      {step === 1 && (
        <Step1 data={formData} setData={setFormData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <div className="flex flex-col h-full w-full m-[0 auto] items-center">
          <Step2
            data={formData}
            setData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            products={products}
          />
          <div className="flex">
            <Button onClick={prevStep}>Back</Button>
            <Button onClick={nextStep}>Next</Button>
          </div>
        </div>
      )}
      {/* Other steps */}
      {step === 3 && (
        <div className="flex flex-col h-full w-full m-[0 auto] items-center">
          <Step3 products={filter} data={formData} setData={setFormData} />
          <div className="flex">
            <Button onClick={prevStep}>Back</Button>
            <Button onClick={submitData}>Submit</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
