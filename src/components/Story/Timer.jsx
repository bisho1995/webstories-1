import React, { useEffect, useState } from "react";
import "./timer.scss";

const REFRESH_INTERVAL = 500;

export default function Timer({ timeout = 3000, onDone = () => {} }) {
  const [progressPercent, setProgressPercent] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const resetCounters = () => {
    setProgressPercent(0);
    setElapsedTime(0);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      if (progressPercent <= 100) {
        setProgressPercent(Math.ceil((elapsedTime * 100) / timeout));
        setElapsedTime(elapsedTime + REFRESH_INTERVAL);
      }
      if (progressPercent >= 100) {
        console.log("reseting");
        resetCounters();
        onDone();
      }
    }, REFRESH_INTERVAL);

    return () => clearInterval(t);
  }, [
    elapsedTime,
    progressPercent,
    setProgressPercent,
    setElapsedTime,
    timeout,
    onDone,
  ]);

  return (
    <div className='timer'>
      <div
        style={{
          height: "100%",
          background: "rgb(124, 124, 124)",
          width: `${progressPercent}%`,
          transition: "width 0.1s",
        }}
      ></div>
    </div>
  );
}
