import React, { useState } from "react";
import { Button, Form } from "reactstrap";
import InputField from "./common/InputField";
import SelectInput from "./common/SelectInput";
import Validator from "./../utils/Validator";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    gender: "",
    ageGroup: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = { ...errors };
    for (let key in userData) {
      newErrors[key] = Validator(key, userData[key]);
      if (!newErrors[key]) delete newErrors[key];
    }
    return newErrors;
  };

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    const newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);

    const newErrors = { ...errors };
    newErrors[name] = Validator(name, newUserData[name]);
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) return;
    doSubmit();
  };

  function doSubmit() {
    Object.keys(userData).forEach((k) => console.log(userData[k]));
  }

  return (
    <Form onSubmit={handleSubmit} className="col-4 mx-auto mt-5">
      <InputField
        label="Name"
        name="name"
        data={userData}
        placeholder="Enter Your Name"
        onChange={handleChange}
        errors={errors}
      />

      <InputField
        label="Email"
        name="email"
        data={userData}
        placeholder="Enter Your Email"
        onChange={handleChange}
        errors={errors}
      />

      <SelectInput
        label="Gender"
        name="gender"
        data={userData}
        onChange={handleChange}
        options={["Choose Your Gender", "Male", "Female", "Other"]}
        errors={errors}
      />
      <SelectInput
        label="Age Group"
        name="ageGroup"
        data={userData}
        onChange={handleChange}
        options={["Select Your Age Group", "1-10", "11-24", "25-110"]}
        errors={errors}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        data={userData}
        placeholder="Enter Your Password"
        onChange={handleChange}
        errors={errors}
      />
      <Button>SignUp</Button>
    </Form>
  );
};

export default SignUp;
