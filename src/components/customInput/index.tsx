import React, { useEffect, useState } from "react";
import CustomInputNumber from "./CustomInputNumber";

type InputProps = {
  name: string;
  min: number;
  max: number;
  step: number;
  value: number;
  limitRef?: React.MutableRefObject<{
    limitRest: number;
    remainingPeople: number;
  }>;
  disabled?: boolean;
  inputCallback: (value: number) => void;
};

const Input: React.FC<InputProps> = ({
  name,
  min,
  max,
  step,
  value,
  limitRef,
  disabled,
  inputCallback,
}) => {
  const [customInputState, setCustomInputState] = useState(value);

  const handleInputValue = (str: string) => {
    if (str === "") return 0;
    const num = parseInt(str.split("").pop());
    return num > max ? max : num < min ? min : num;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    if (limitRef?.current.remainingPeople > limitRef?.current.limitRest) {
      if (
        handleInputValue(event.target.value) - customInputState >
        limitRef?.current.limitRest
      ) {
        setCustomInputState((prev) => prev + limitRef?.current.limitRest);
        return;
      } else {
        setCustomInputState(handleInputValue(event.target.value));
        return;
      }
    } else {
      if (
        handleInputValue(event.target.value) - customInputState >
        limitRef?.current.remainingPeople
      ) {
        setCustomInputState((prev) => prev + limitRef?.current.remainingPeople);
        return;
      } else {
        setCustomInputState(handleInputValue(event.target.value));
        return;
      }
    }
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
        value={value}
        step={step}
        limitRef={limitRef}
        onChange={handleInputChange}
        onBlur={(e) => {
          // console.log(e.target.value);
          // console.log(e.target.name);
        }}
        setCustomInputState={setCustomInputState}
        disabled={disabled}
      />
    </>
  );
};

export default React.memo(Input);
