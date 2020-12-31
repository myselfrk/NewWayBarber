import React, { useState } from "react";
import { Button, Form } from "reactstrap";
import Validator from "../utils/Validator";
import InputField from "./common/InputField";

const LogIn = () => {
  const [userData, setUserData] = useState({
    email: "",
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
    <Form onSubmit={handleSubmit} className="col-4 mx-auto form">
      <InputField
        label="Email"
        name="email"
        data={userData}
        placeholder="Enter Your Email"
        onChange={handleChange}
        errors={errors}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter Your Password"
        onChange={handleChange}
        errors={errors}
        data={userData}
      />
      <Button color="primary">LogIn</Button>
    </Form>
  );
};

export default LogIn;
