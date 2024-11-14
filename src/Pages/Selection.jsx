// Selection.js
import React from 'react';
import '../css/Selection.css'; // Import the CSS file

const Selection = ({ setRole }) => {
  return (
    <div className="selection-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="loading.mp4" type="video/mp4" />
        <source src="loading.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="overlaySelection">
        <h1 className="selection-heading">Welcome to Inter IIT Sports Portal:</h1>
        <p className="selection-description">
          Please choose which section you'd like to explore:
        </p>
        <button className="selection-button" onClick={() => setRole('student')}>
          IISM'24
        </button>
        <button className="selection-button" onClick={() => setRole('staff')}>
          IISSM'24
        </button>
      </div>
    </div>
  );
};

export default Selection;
