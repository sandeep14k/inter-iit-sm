import React from "react";
import '../css/Schedule.css';

const Sportsfilter = ({ onSearch, onSportSelect }) => {
  const handleSportClick = (sport) => {
    onSportSelect(sport);
  };

  return (
    <div>
      <br />
      <fieldset>
        <legend className='md:text-[50px] sm:text-[40px] text-[30px]  md:px-[75px] px-[20px]'>Schedule</legend>
      </fieldset>
      <br />
      <div className="button-container">
        <button className="button" onClick={() => handleSportClick('cricket')}>Cricket</button>
        <button className="button" onClick={() => handleSportClick('lawn Tennis')}>Lawn Tennis</button>
        <button className="button" onClick={() => handleSportClick('volleyball')}>Volleyball</button>
        <button className="button" onClick={() => handleSportClick('hockey')}>Hockey</button>
        <button className="button" onClick={() => handleSportClick('basketball')}>Basketball</button>
      </div>
    </div>
  );
};

export default Sportsfilter;
