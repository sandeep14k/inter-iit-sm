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

    // <div className="match-card">
    //   <h3>Match {match.id}</h3>
    //   <p>Pool {match.pool}</p>
    //   <p>{match.team1} vs {match.team2}</p>
    //   <p>Time: {match.time}</p>
    //   <p>Venue: {match.venue}</p>
    // </div>
  );
}


export default MatchCardR;