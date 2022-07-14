import React, { useEffect, useRef, useState } from "react";
import Room from "Components/room";

import styles from "./roomAllocation.module.css";

type RoomAllocationProps = {
  guest: number;
  room: number;
  onChange: (result) => void;
};

const RoomAllocation: React.FC<RoomAllocationProps> = ({
  guest = 1,
  room = 1,
  onChange,
}) => {
  const [allocationState, setAllocationState] = useState(
    [...Array(room).keys()].map(() => ({ adult: 1, child: 0 }))
  );

  const capacity = allocationState.reduce((acc, current) => {
    return acc + current.adult + current.child;
  }, 0);

  const allocationOnChange = (
    index: number,
    adultNumber: number,
    childNumber: number
  ) => {
    const newAllocation = [...allocationState];
    newAllocation[index] = { adult: adultNumber, child: childNumber };
    setAllocationState(newAllocation);
  };

  useEffect(() => {
    onChange(allocationState);
  }, [allocationState]);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <span className={styles.condition}>
          住客人數 : {guest} 人 / {room} 房
        </span>
      </div>
      <div className={styles.section}>
        <span className={styles.remainNotification}>
          尚未分配人數 : {guest - capacity} 人
        </span>
      </div>
      {[...Array(room).keys()].map((index) => {
        return (
          <Room
            key={`${index}_room`}
            index={index}
            remainingPeople={guest - capacity}
            roomOnChange={allocationOnChange}
            disabled={guest === room}
          />
        );
      })}
    </div>
  );
};

export default RoomAllocation;
