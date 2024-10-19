import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/MatchCardR.css";
import { SiGooglemaps, SiYoutube } from "react-icons/si";
import { HiClock, HiCalendarDays } from "react-icons/hi2";
import { IoMaleFemaleSharp, IoMaleSharp, IoFemaleSharp } from "react-icons/io5";

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
  console.log(match);
  return (
    <>
      <div className={"match-card " + match.status}>
        <div className="card-info">
          <span className="sport-name">
            {match.sport.toUpperCase()} &nbsp;
            {match.category == "Men" && (
              <IoMaleSharp style={{ display: "inline-block" }} />
            )}
            {match.category == "Women" && (
              <IoFemaleSharp style={{ display: "inline-block" }} />
            )}
            {match.category == "Mixed" && (
              <IoMaleFemaleSharp style={{ display: "inline-block" }} />
            )}
          </span>
          <div className="team team-left">
            <img src={IITs[match.team1]} alt="IIT Logo" className="team-logo" />
            <div className="team-name">{match.team1}</div>
          </div>
          <div className="match-info">
            <span className="vs">
              {match.status != "upcoming" && match.sport == "cricket" && (
                <div className="result cricket">
                  {match.team1_score || 0} <span className="sep">/</span>{" "}
                  {match.team1_wickets || 0}
                  <br />
                  <span className="overs">{match.overs || 0}</span>
                </div>
              )}
              {match.status != "upcoming" && match.sport == "hockey" && (
                <div className="result hockey">{match.team1_goals || 0}</div>
              )}
              {match.status != "upcoming" && match.sport == "basketball" && (
                <div className="result basketball">{match.team1_score || 0}</div>
              )}
              <span>V/S</span>
              {match.status != "upcoming" && match.sport == "cricket" && (
                <div className="result cricket">
                  {match.team2_score || 0} <span className="sep">/</span>{" "}
                  {match.team2_wickets || 0}
                  <br />
                  <span className="overs">{match.overs || 0}</span>
                </div>
              )}
              {match.status != "upcoming" && match.sport == "hockey" && (
                <div className="result hockey">{match.team2_goals || 0}</div>
              )}
              {match.status != "upcoming" && match.sport == "basketball" && (
                <div className="result basketball">{match.team2_score || 0}</div>
              )}
            </span>

            <div className="match-time-format">
              {match.status != "live" && (
                <>
                  <span>
                    <HiCalendarDays style={{ display: "inline-block" }} />
                    &nbsp; {date[2] + " " + date[1]}&nbsp;
                  </span>
                  &nbsp;
                </>
              )}
              <div className="match-details">
                {match.status == "live" && (
                  <Link
                    target="_blank"
                    to={
                      match.liveStreamUrl ||
                      "https://youtu.be/7d186s14Jg4?si=3L65E1MjTroqv1yJ"
                    }
                    className="extra-button livebtn"
                  >
                    <SiYoutube
                      style={{ display: "inline-block", marginRight: "5px" }}
                    />{" "}
                    Live
                  </Link>
                )}
                {match.status != "completed" ? (
                  <Link
                    target="_blank"
                    to={
                      match.locationUrl ||
                      "https://maps.app.goo.gl/Y438GM3RJka7UE5MA"
                    }
                    className="extra-button location"
                  >
                    <SiGooglemaps
                      style={{ display: "inline-block", marginRight: "5px" }}
                    />{" "}
                    {match.venue}
                  </Link>
                ) : (
                  <span>
                    <SiGooglemaps
                      style={{ display: "inline-block", marginRight: "5px" }}
                    />{" "}
                    {match.venue}
                  </span>
                )}
              </div>
              {match.status != "live" && (
                <>
                  &nbsp;
                  <span>
                    <HiClock style={{ display: "inline-block" }} /> &nbsp;
                    {match.time.split(":").splice(0, 2).join(":")}&nbsp;
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="team team-right">
            <img src={IITs[match.team2]} alt="IIT Logo" className="team-logo" />
            <div className="team-name">{match.team2}</div>
          </div>
        </div>
        {match.status != "upcoming" && (
          <div className={"tag " + (match.status == "completed" && "disabled")}>
            {match.status == "live" && "Live"}
            {match.status == "completed" && "Ended"}
          </div>
        )}
      </div>
    </>
  );
}

export default MatchCardR;
