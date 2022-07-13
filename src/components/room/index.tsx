import React, { useEffect, useRef, useState } from "react";
import CustomInput from "Components/customInputNumber";

const Room: React.FC = () => {
  return (
    <div>
      <CustomInput
        min={0}
        max={10}
        name="test name"
        inputCallback={(value) => {
          console.log(value);
        }}
        step={1}
        disabled={false}
      />
    </div>
  );
};

export default Room;
