import React, { useEffect, useRef, useState } from "react";
import { ROOM_DEFAULT_NAME } from "Shared/constants/room";
import CustomInput from "./customInput";
import RoomAllocation from "./roomAllocation";

const DemoPage: React.FC = () => {
  const [controlInput, setControlInput] = useState(0);
  const [controlInputTwo, setControlInputTwo] = useState(0)
  return (
    <>
      <h1>Demo RoomAllocation</h1>
      <RoomAllocation
        guest={10}
        room={4}
        onChange={(result) => {
          console.log(result);
        }}
      />
      <RoomAllocation
        guest={5}
        room={5}
        onChange={(result) => {
          console.log(result);
        }}
      />
      <h1>Demo input</h1>
      <CustomInput
        min={-2}
        max={10}
        name={`${ROOM_DEFAULT_NAME}_child${0}`}
        value={controlInput}
        inputCallback={(value) => setControlInput(value)}
        step={1}
      />
      <CustomInput
        min={0}
        max={12}
        name={`${ROOM_DEFAULT_NAME}_child${1}`}
        value={controlInputTwo}
        inputCallback={(value) => setControlInputTwo(value)}
        step={4}
      />
    </>
  );
};

export default DemoPage;
