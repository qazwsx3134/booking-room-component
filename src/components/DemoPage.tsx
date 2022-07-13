import React, { useEffect, useRef, useState } from "react";
import CustomInput from "./customInputNumber";
import Room from "./room";

const DemoPage: React.FC = () => {
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
      <Room />
    </div>
  );
};

export default DemoPage;
