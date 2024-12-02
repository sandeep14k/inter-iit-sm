import React from "react";
import { Link } from "react-router-dom";
import "../../css/MatchCardR.css";
import { SiGooglemaps, SiYoutube } from "react-icons/si";
import { HiClock, HiCalendarDays } from "react-icons/hi2";
import { SportName, TeamLogo } from "./utils/SportCardUtils";
import {
  BasketScore,
  CricketScore,
  HockeyScore,
  LawnTennisScore,
} from "./utils/ScoreUI";

let locationVenueMap = {
  cricket: "https://maps.app.goo.gl/FpTCAMRcANB4gZPA6",
  volleyball: "https://maps.app.goo.gl/N1Wifb1BHsvNWGR8A",
  basketball: "https://maps.app.goo.gl/6sn6m9muKxZHhYoN7",
  "lawn tennis": "https://maps.app.goo.gl/YLZz5zWsPFpyZ6wR8",
  hockey: "https://maps.app.goo.gl/uHzKub8eMjU5ELnKA",
  "table tennis": "https://maps.app.goo.gl/mS963wEW1xnDaKxb8",
};

function formatAMPM(date) {
  var hours = parseInt(date.split(":")[0]);
  var minutes = parseInt(date.split(":")[1]);
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function MatchCardR({ match }) {
  let d = new Date(match.date);
  let date = d.toDateString().split(" ");
  console.log(match);
  return (
    <>
      <div className={"match-card " + match.status}>
        <div className="card-info">
          <SportName match={match} />
          <TeamLogo team={match.team1} />

          <div className="match-info">
            <div className="vs">
              {match.status != "upcoming" ? (
                <>
                  {match.sport == "cricket" && <CricketScore match={match} />}
                  {match.sport == "hockey" && <HockeyScore match={match} />}
                  {match.sport == "basketball" && <BasketScore match={match} />}
                  {match.sport == "lawn tennis" && (
                    <LawnTennisScore match={match} />
                  )}
                  {match.sport == "volleyball" && (
                    <LawnTennisScore match={match} />
                  )}
                  {match.sport == "table tennis" && (
                    <LawnTennisScore match={match} />
                  )}
                  {match.sport == "badminton" && (
                    <LawnTennisScore match={match} />
                  )}
                  {match.sport == "squash" && <LawnTennisScore match={match} />}
                  {match.sport == "football" && <HockeyScore match={match} />}
                </>
              ) : (
                <div>V/S</div>
              )}
            </div>

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
                      style={{ display: "inline-block", marginRight: "2px" }}
                    />{" "}
                    Live
                  </Link>
                )}
                {match.status != "completed" ? (
                  <Link
                    target="_blank"
                    to={locationVenueMap[match.sport]}
                    className="extra-button location"
                  >
                    <SiGooglemaps
                      style={{ display: "inline-block", marginRight: "2px" }}
                    />
                    {match.venue || "NewSac"}
                  </Link>
                ) : (
                  <span>
                    &nbsp;&nbsp;
                    <SiGooglemaps
                      style={{ display: "inline-block", marginRight: "2px" }}
                    />{" "}
                    {match.venue || "NewSac"}&nbsp;&nbsp;
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
          <TeamLogo team={match.team2} />
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
