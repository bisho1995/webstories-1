import React from "react";
import { useState } from "react";
import "./App.scss";

const imgList = [
  "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
  "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1554570731-63bcddda4dcd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=882&q=80",
  "https://images.unsplash.com/photo-1518799175676-a0fed7996acb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
];
function App() {
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
    <>
      <div className='scene'>
        <div
          className='cube'
          onClick={handleCubeClick}
          style={{
            transform: `translateZ(-100px) rotateY(${deg}deg)`,
          }}
        >
          <div className='cube__face cube__face--front'>
            <img src={imgList[0]} alt='random' />
          </div>
          <div className='cube__face cube__face--back'>
            <img src={imgList[1]} alt='random' />
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
              <img src={imgList[2]} alt='random' />
            </div>
          </div>
          <div
            className='cube__face cube__face--left'
            style={{
              transform: `rotateY(-90deg) translateZ(${
                window.innerWidth / 2
              }px)`,
            }}
          >
            <img src={imgList[3]} alt='random' />
          </div>
          {/* <div className='cube__face cube__face--top'>top</div>
          <div className='cube__face cube__face--bottom'>bottom</div> */}
        </div>
      </div>
    </>
  );
}

export default App;
