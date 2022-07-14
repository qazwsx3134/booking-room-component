import React, { useEffect, useRef, useState } from "react";
import RoomAllocation from "./roomAllocation";

const DemoPage: React.FC = () => {
  return (
    <>
      <h1>Demo Page</h1>
      <RoomAllocation
        guest={10}
        room={4}
        onChange={(result) => {
          console.log(result);
        }}
      />
    </>
  );
};

export default DemoPage;
