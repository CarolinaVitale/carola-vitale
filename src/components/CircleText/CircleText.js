import React, { useRef } from 'react';
import '../CircleText/CircleText.css';

function CircleText({ text }) {
  const textRef = useRef(null);

  const chars = text.split(""); // Split the text into characters

  return (
    <div className='circle-container'>
      <div className="circle">
        <div className="logo-circle"></div>
        <div className="text-circle">
          <p ref={textRef}>{chars.map((char, i) => (
            <span
              key={i} // Add a unique key for each span
              style={{ transform: `rotate(${i * 7.2}deg)` }}
            >
              {char}
            </span>
          ))}</p>
        </div>
      </div>

    </div>
    
  );
}

export default CircleText;