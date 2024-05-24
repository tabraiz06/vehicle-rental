import React from "react";

const Step3 = ({ products, data, setData }) => {
  console.log(products);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  let filterModel = [];
  if (data.vehicleName !== "") {
    console.log(data.vehicleName);
    products.filter((ele) => {
      if (ele.vehicleName === data.vehicleName) {
        filterModel = ele.vehicleModels;
      }
    });
  }
  console.log(filterModel);
  return (
    <div>
      <h1>hello from step3</h1>
      <form action="">
        <label htmlFor="select model">select Brand</label>
        <select name="vehicleName" onChange={handleChange}>
          <option value="select">selcet brand</option>
          {products.map((ele) => {
            return (
              <>
                <option value={ele.vehicleName}>{ele.vehicleName}</option>
              </>
            );
          })}
        </select>
        <label htmlFor="select model">Select Model</label>
        <select name="vehicleModel" onChange={handleChange}>
          <option value="select model"></option>
          {filterModel.map((ele) => {
            return <option value={ele}>{ele}</option>;
          })}
        </select>
      </form>
    </div>
  );
};

export default Step3;
