import React from 'react';
import '../css/Schedule.css';

function MatchCardR() {
  return (
    <div className="match-card">
      <div className='details'>
        <h3>Match 1</h3>
        <p className='dete-font'>Pool A</p>
        <div className='time'>
          <p className='dete-font'>Time:</p>
          <p className='dete-font'>Venue: </p>
        </div>
      </div>
      <div className='box'>
        <div>
        </div>
        <div className='logos'>
          <p className='match'>Bombay vs <br /> Kanpur</p>
          <img className='iitlogo' src="" alt="" />vs<img className='iitlogo' src="" alt="" />
        </div>
        <div className='versus'>
          <p>Kanpur won <br /> by 100 runs</p>
        </div>
      </div>
    </div>
  );
}


export default MatchCardR;