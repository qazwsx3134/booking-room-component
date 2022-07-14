import React, { useEffect, useRef, useState } from "react";
import CustomInput from "Components/customInput";

import styles from "./room.module.css";
import { FOUR_PEOPLE_ROOM_LIMIT, ROOM_DEFAULT_NAME } from "Shared/constants/room";


type RoomProps = {
  index: number;
  remainingPeople: number;
  disabled?: boolean;
  roomOnChange: (
    index: number,
    adultNumber: number,
    childNumber: number
  ) => void;
};

const Room: React.FC<RoomProps> = ({
  index,
  remainingPeople,
  disabled,
  roomOnChange,
}) => {
  const [adultNumber, setAdultNumber] = useState(1);
  const [childNumber, setChildNumber] = useState(0);

  const limitRest = FOUR_PEOPLE_ROOM_LIMIT - adultNumber - childNumber;

  const adultOnChange = (value: number) => {
    setAdultNumber(value);
  };
  const childOnChange = (value: number) => {
    setChildNumber(value);
  };

  useEffect(() => {
    roomOnChange(index, adultNumber, childNumber);
  }, [adultNumber, childNumber]);

  return (
    <div className={styles.container}>
      <div className={styles.numberOfPeople}>
        房間 : {adultNumber + childNumber} 人
      </div>
      <div className={styles.inputWrapper}>
        <div>
          <div>大人</div>
          <div className={styles.subTitle}>年齡 20+</div>
        </div>
        <CustomInput
          min={1}
          max={4}
          name={`${ROOM_DEFAULT_NAME}_adult_${index}`}
          value={adultNumber}
          inputCallback={adultOnChange}
          step={1}
          disabled={disabled}
          limitRest={limitRest}
          remainingPeople={remainingPeople}
        />
      </div>
      <div className={`${styles.borderBottom} ${styles.inputWrapper}`}>
        <div>
          <div>小孩</div>
        </div>
        <CustomInput
          min={0}
          max={4}
          name={`${ROOM_DEFAULT_NAME}_child${index}`}
          value={childNumber}
          inputCallback={childOnChange}
          step={1}
          disabled={disabled}
          limitRest={limitRest}
          remainingPeople={remainingPeople}
        />
      </div>
    </div>
  );
};

export default React.memo(Room);
