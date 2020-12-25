import React, { useState } from "react";
import "./story.scss";

export default function Story({ images }) {
  const [deg, setDeg] = useState(0);
  const handleCubeClick = (e) => {
    const halfWidth = window.innerWidth / 2;
    const clickX = e.clientX;
    const clickDirection = clickX <= halfWidth ? "left" : "right";
    switch (clickDirection) {
      case "left":
        setDeg(deg + 90);
        break;
      case "right":
      default:
        setDeg(deg - 90);
        break;
    }
  };
  return (
    <div className='scene'>
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
