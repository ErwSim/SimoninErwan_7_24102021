import { useState } from "react";

const useInput = (initialValue, options = { required: false }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const isValid = () => {
    if (options.required) {
      if (value === "" || value === undefined || value === null) {
        return false;
      }
    }

    return true;
  };

  return {
    value,
    onChange: handleChange,
    isValid,
  };
};

export default useInput;
