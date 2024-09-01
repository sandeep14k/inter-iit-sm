import React from 'react';
import '../css/Schedule.css';

const Timeline = ({ onDateSelect }) => {
  const handleDateClick = (date) => {
    onDateSelect(date);
  };

  return (
    <div className="timeline">
      <div className="indicator">On</div>
      <div className="bar">
        <button className="date" onClick={() => handleDateClick('2024-12-18T00:00:00.000Z')}>18th Dec</button>
        <button className="date" onClick={() => handleDateClick('2024-12-19T00:00:00.000Z')}>19th Dec</button>
        <button className="date" onClick={() => handleDateClick('2024-12-20T00:00:00.000Z')}>20th Dec</button>
        <button className="date" onClick={() => handleDateClick('2024-12-21T00:00:00.000Z')}>21st Dec</button>
        <button className="date" onClick={() => handleDateClick('2024-12-22T00:00:00.000Z')}>22nd Dec</button>
        <button className="date" onClick={() => handleDateClick('2024-12-23T00:00:00.000Z')}>23rd Dec</button>
        <button className="date" onClick={() => handleDateClick('2024-12-24T00:00:00.000Z')}>24th Dec</button>
      </div>
    </div>
  );
};

export default Timeline;

