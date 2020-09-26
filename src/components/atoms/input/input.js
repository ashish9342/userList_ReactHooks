import React from "react";

const Input = (props) => {
  const { name, id, placeholder, onChange, value } = props;

  return (
    <input
      type="text"
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="inputText"
    />
  );
};

export default Input;
