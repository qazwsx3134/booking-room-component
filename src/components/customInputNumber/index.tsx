import React, { useEffect, useState } from "react";
import CustomInputNumber from "./CustomInputNumber";

type InputProps = {
  name: string;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  inputCallback: (value: number) => void;
};

const Input: React.FC<InputProps> = ({
  name,
  min,
  max,
  step,
  disabled,
  inputCallback,
}) => {
  const [customInputState, setCustomInputState] = useState(0);

  const handleOnChange = (str: string) => {
    if (str === "") return 0;
    return parseInt(str);
  };

  useEffect(() => {
    inputCallback(customInputState);
  }, [customInputState]);

  return (
    <>
      <CustomInputNumber
        min={min}
        max={max}
        name={name}
        value={customInputState}
        step={step}
        onChange={(e) => {
          console.log(e.target.value);
          console.log(e.target.name);
          setCustomInputState(handleOnChange(e.target.value));
        }}
        onBlur={(e) => {
          console.log(e.target.value);
          console.log(e.target.name);
        }}
        setCustomInputState={setCustomInputState}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
