import React, { useEffect, useState } from "react";
import Database from "../../utils/Database";
import { Link } from "react-router-dom";
import "../../css/new.css";
import { SiYoutube, SiGooglemaps } from "react-icons/si";

function MatchCardR({ match }) {
  let d = new Date(match.date);
  let date = d.toDateString().split(" ");

  const db = new Database();

  const [score, setScore] = useState();
  const [toFetch, setToFetch] = useState(false);

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
  const fetchScore = async () => {
    if (toFetch == false) return;
    let s = await db.getScore(match.matchID, match.sport);
    
    if (s && (match.sport == "volleyball" || match.sport == "table tennis" || match.sport == "lawn tennis")) {
      let t1_won = 0;
      let t2_won = 0;
      for (let i = 1; i <= 5; i++) {
        if (s[`set${i}_score1`] > s[`set${i}_score2`]) t1_won++;
        else if (s[`set${i}_score1`] < s[`set${i}_score2`]) t2_won++;
      }
      setScore({ ...s, t1_won, t2_won });
    }
    else setScore(s);

    setToFetch(false);
  };

  useEffect(() => {
    fetchScore();
  }, [toFetch]);

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
              {match.status == "upcoming" && 
              <>
              <span>{date[2] + " " + date[1]}&nbsp;</span>|
              </>}
              <span className="sport-name">{match.sport.toUpperCase()}</span>
              {match.status == "upcoming" && 
              <>
              |<span>{match.time.split(":").splice(0, 2).join(":")}&nbsp;</span>
              </>}
            </div>
          </div>
          <div className="team team-right">
            <span>{match.team2}</span>
            <img src={IITs[match.team2]} alt="IIT Logo" className="team-logo" />
          </div>
        </div>
          <div className="extra-box">
            {match.status == "ongoing" && (
              <Link
                target="_blank"
                to={match.liveStreamUrl}
                className="watch-live extra-button"
              >
                <SiYoutube style={{display:"inline-block", marginRight:"5px"}} /> Live Match
              </Link>
            )}
              {match.status != "upcoming" && (
            <div
              onClick={() => setToFetch(true)}
              className="show-result extra-button"
            >
              {match.status == "ongoing" ? "Fetch Live" : "See"} Result
            </div>
            )}
            {match.status != "completed" && (
              <Link
                target="_blank"
                to={match.locationUrl}
                className="location extra-button"
              >
                <SiGooglemaps style={{display:"inline-block", marginRight:"5px"}} /> Location
              </Link>
            )}
          </div>
      </div>
      {match.status != "upcoming" &&
        score &&
        (match.sport == "basketball" || match.sport == "hockey") && (
          <div className="result basket hockey">
            <div className="logo-r">
              <img
                src={IITs[match.team1]}
                alt="IIT Logo"
                className="team-logo"
              />
            </div>
            <div className="score">
              {match.sport == "hockey" ? score.team1_goals : score.team1_score}{" "}
              &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              {match.sport == "hockey" ? score.team2_goals : score.team2_score}
              <br />
              <span className="score-type">
                {match.sport == "hockey" ? "Goals" : "Baskets"}
              </span>
            </div>
            <div className="logo-r">
              <img
                src={IITs[match.team2]}
                alt="IIT Logo"
                className="team-logo"
              />
            </div>
          </div>
        )}
      {match.status != "upcoming" && score && match.sport == "cricket" && (
        <div className="result cricket">
          <div className="logo-r">
            <img src={IITs[match.team1]} alt="IIT Logo" className="team-logo" />
          </div>
          <div className="score">
            {score.team1_score} &nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;
            {score.team1_wickets}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {score.team2_score} &nbsp;&nbsp;<span>/</span>&nbsp;&nbsp;{" "}
            {score.team2_score}
            {score.team2_wickets}
            <br />
            <span className="overs">{score.overs}</span>
          </div>
          <div className="logo-r">
            <img src={IITs[match.team2]} alt="IIT Logo" className="team-logo" />
          </div>
        </div>
      )}
      {match.status != "upcoming" && score && 
      (match.sport == "volleyball" || match.sport == "table tennis" || match.sport == "lawn tennis") 
      && (
        <div className="result volley">
          <table>
            <thead>
              <tr>
                <td></td>
                <td>Set 1</td>
                <td>Set 2</td>
                <td>Set 3</td>
                <td>Set 4</td>
                <td>Set 5</td>
                <td>Sets Won</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="logo-r">
                    <img
                      src={IITs[match.team1]}
                      alt="IIT Logo"
                      className="team-logo"
                    />
                  </div>
                </td>
                <td>{score.set1_score1}</td>
                <td>{score.set2_score1}</td>
                <td>{score.set3_score1}</td>
                <td>{score.set4_score1}</td>
                <td>{score.set5_score1}</td>
                <td>{score.t1_won}</td>
              </tr>
              <tr>
                <td>
                  <div className="logo-r">
                    <img
                      src={IITs[match.team2]}
                      alt="IIT Logo"
                      className="team-logo"
                    />
                  </div>
                </td>
                <td>{score.set1_score2}</td>
                <td>{score.set2_score2}</td>
                <td>{score.set3_score2}</td>
                <td>{score.set4_score2}</td>
                <td>{score.set5_score2}</td>
                <td>{score.t2_won}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default MatchCardR;
