import React, { useEffect, useRef } from "react";
import velocity from "velocity-animate";
import "./timer.scss";

export default function Timer({ timeout = 3000, onDone = () => {} }) {
  const progressRef = useRef(null);

  useEffect(() => {
    velocity(
      progressRef.current,
      { width: "100%" },
      { duration: timeout }
    ).then(onDone);
  }, [timeout, onDone]);

  return (
    <div className='timer'>
      <div
        ref={progressRef}
        style={{
          height: "100%",
          background: "rgb(124, 124, 124)",
          width: `0%`,
          transition: "width 0.1s",
        }}
      ></div>
    </div>
  );
}
