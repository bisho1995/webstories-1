import React, { useState } from "react";
import Timer from "./Timer";
import "./story.scss";

export default function Story({ images }) {
  const [deg, setDeg] = useState(0);

  const rotateRight = () => {
    setDeg(deg - 90);
  };
  const rotateLeft = () => {
    setDeg(deg + 90);
  };
  const handleCubeClick = (e) => {
    const halfWidth = window.innerWidth / 2;
    const clickX = e.clientX;
    const clickDirection = clickX <= halfWidth ? "left" : "right";
    switch (clickDirection) {
      case "left":
        rotateLeft();
        break;
      case "right":
      default:
        rotateLeft();
        break;
    }
  };
  return (
    <div className='scene'>
      <Timer onDone={rotateRight} timeout={10000} />
      <div
        className='cube'
        onClick={handleCubeClick}
        style={{
          transform: `translateZ(-100px) rotateY(${deg}deg)`,
        }}
      >
        <div className='cube__face cube__face--front'>
          <img src={images[0]} alt='random' />
        </div>
        <div className='cube__face cube__face--back'>
          <img src={images[1]} alt='random' />
        </div>
        <div
          className='cube__face cube__face--right'
          style={{
            transform: `rotateY(-90deg) translateZ(-${
              window.innerWidth / 2
            }px)`,
          }}
        >
          <div style={{ transform: "rotateY(180deg)" }}>
            <img src={images[2]} alt='random' />
          </div>
        </div>
        <div
          className='cube__face cube__face--left'
          style={{
            transform: `rotateY(-90deg) translateZ(${window.innerWidth / 2}px)`,
          }}
        >
          <img src={images[3]} alt='random' />
        </div>
        {/* <div className='cube__face cube__face--top'>top</div>
    <div className='cube__face cube__face--bottom'>bottom</div> */}
      </div>
    </div>
  );
}
