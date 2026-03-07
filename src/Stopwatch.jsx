import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
    setTimer(0);
  };
  const handlePause = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <>
      <h1>Timer</h1>
      <div>{timer}</div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePause}> Pause</button>
      <button onClick={handleStart}> Start </button>
      <Link to="/"> Back to Home</Link>
    </>
  );
};
