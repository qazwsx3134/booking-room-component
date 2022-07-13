import React, { useEffect, useRef, useState } from "react";
import minusSvg from "Assets/minus.svg";
import addSvg from "Assets/add.svg";
import styles from "./customInputNumber.module.css";

type CustomInputNumberProps = {
  name: string;
  min: number;
  max: number;
  value: number;
  disabled?: boolean;
  step: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  setCustomInputState: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * No specify the type="number" due to the react bug
 * See the bug below
 * https://github.com/facebook/react/issues/9402
 * @param onChange It's the callback will give input's value
 */
const CustomInputNumber: React.FC<CustomInputNumberProps> = ({
  name,
  min,
  max,
  value,
  disabled,
  step,
  onChange,
  onBlur,
  setCustomInputState,
}) => {
  const timerRef = useRef<NodeJS.Timeout>();
  const intervalRef = useRef<NodeJS.Timeout>();
  const iconOnClick = (direction: string) => () => {
    if (disabled) return;
    if (direction === "add") {
      if (value + step > max) {
        setCustomInputState(max);
        return;
      }
      setCustomInputState(value + step);
    }

    if (direction === "minus") {
      if (value - step < min) {
        setCustomInputState(min);
        return;
      }
      setCustomInputState(value - step);
    }
  };

  const onLongClick = (direction: string) => () => {
    if (disabled) return;
    timerRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (direction === "add") {
          setCustomInputState((prevState) => {
            if (prevState + step > max) {
              return max;
            }
            return prevState + step;
          });
        }
        if (direction === "minus") {
          setCustomInputState((prevState) => {
            if (prevState - step < min) {
              return min;
            }
            return prevState - step;
          });
        }
      }, 100);
    }, 300);
  };

  const onMouseUpClear = () => {
    if (disabled) return;
    clearTimeout(timerRef.current);
    clearInterval(intervalRef.current);
  };

  return (
    <div className={styles.container}>
      <span
        className={`${styles.block} ${styles.button} ${
          disabled ? styles.disabled : styles.active
        }`}
        onClick={iconOnClick("minus")}
        onMouseDown={onLongClick("minus")}
        onMouseUp={onMouseUpClear}
      >
        <img src={minusSvg} className={`${styles.icon}`} />
      </span>
      <input
        className={`${styles.block} ${styles.input} ${
          disabled ? styles.disabled : styles.active
        }`}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span
        className={`${styles.block} ${styles.button} ${
          disabled ? styles.disabled : styles.active
        }`}
        onClick={iconOnClick("add")}
        onMouseDown={onLongClick("add")}
        onMouseUp={onMouseUpClear}
      >
        <img src={addSvg} className={`${styles.icon}`} />
      </span>
    </div>
  );
};

export default CustomInputNumber;
