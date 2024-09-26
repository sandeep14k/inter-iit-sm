import React from "react";
import { Link } from "react-router-dom";
import "../../css/new.css";

function MatchCardR({ match }) {
  let d = new Date(match.date);
  let date = d.toDateString().split(" ");
  const IITs = {
    "IIT Bombay": "/IITs_Logo/Bombay.svg",
    "IIT Delhi": "/IITs_Logo/Delhi.jpg",
    "IIT Madras": "/IITs_Logo/Madras.jpg",
    "IIT Kanpur": "/IITs_Logo/Kanpur.svg",
    "IIT Kharagpur": "/IITs_Logo/KGP.jpg",
    "IIT Roorkee": "/IITs_Logo/Roorkee.svg",
    "IIT Guwahati": "/IITs_Logo/Guwahati.jpg",
    "IIT Hyderabad": "/IITs_Logo/Hyderabad.jpg",
    "IIT Indore": "/IITs_Logo/Indore.jpg",
    "IIT BHU": "/IITs_Logo/BHU.jpg",
    "IIT Jodhpur": "/IITs_Logo/Jodhpur.jpg",
    "IIT Mandi": "/IITs_Logo/Mandi.jpg",
    "IIT Patna": "/IITs_Logo/Patna.jpg",
    "IIT Ropar": "/IITs_Logo/Ropar.jpg",
    "IIT Bhubaneswar": "/IITs_Logo/Bhubaneshwar.jpg",
    "IIT Gandhinagar": "/IITs_Logo/Gandhinagar.jpg",
    "IIT Dhanbad": "/IITs_Logo/Dhanbad.jpg",
    "IIT Bhilai": "/IITs_Logo/Bhilai.jpg",
    "IIT Goa": "/IITs_Logo/Goa.jpg",
    "IIT Jammu": "/IITs_Logo/Jammu.jpg",
    "IIT Dharwad": "/IITs_Logo/Dharwad.jpg",
    "IIT Palakkad": "/IITs_Logo/Palakkad.jpg",
    "IIT Tirupati": "/IITs_Logo/Tirupati.jpg",
  };
  return (
    <>
      <div className="match-card">
        <div className="card-info">
          <div className="team team-left">
            <img src={IITs[match.team1]} alt="IIT Logo" className="team-logo" />
            <span>{match.team1}</span>
          </div>
          <div className="match-info">
            <div className="match-details">{match.venue}</div>
            <div className="match-time-format">
              <span>{date[2] + " " + date[1]}&nbsp;</span>|
              <span>{match.time.split(":").splice(0, 2).join(":")}&nbsp;</span>
            </div>
          </div>
          <div className="team team-right">
            <span>{match.team2}</span>
            <img src={IITs[match.team2]} alt="IIT Logo" className="team-logo" />
          </div>
        </div>
        {match.status != "upcoming" &&
          <div className="extra-box">
            {
              match.status == "ongoing" &&
              <Link target="_blank" to={match.liveStreamUrl} className="watch-live extra-button">See Live Match</Link>
            }
            <div className="show-result extra-button">See {match.status == "ongoing" && "Live"} Result</div>
            {
              match.status == "ongoing" &&
              <Link target="_blank" to={match.locationUrl} className="location extra-button">Maps to Venue</Link>
            }
          </div>
        }
      </div>
      <div className="result"></div>
    </>
  );
}

export default MatchCardR;
