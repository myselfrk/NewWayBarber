import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const SelectInput = ({ label, name, options, onChange, errors }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input type="select" onChange={onChange} name={name} id={name}>
        {options.map((opt, index) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Input>
      {errors[name] && <div className="alert alert-danger">{errors[name]}</div>}
    </FormGroup>
  );
};

export default SelectInput;
