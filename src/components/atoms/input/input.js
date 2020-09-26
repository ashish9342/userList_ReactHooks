import React, { useState, useEffect } from "react";

const Input = (props) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const { name, id, placeholder, onChange } = props;

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
