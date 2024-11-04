import { FcStart } from "react-icons/fc";
import {
  GiHockey,
  GiBasketballBasket,
  GiCricketBat,
  GiAbstract004,
  GiTennisBall,
} from "react-icons/gi";

export function CricketScore({ match }) {
  return (
    <>
      <div className="result cricket">
        {match.team1_score || 0} <span className="sep">/</span>{" "}
        {match.team1_wickets || 0}
        <br />
        <div>
          <GiCricketBat style={{ display: "inline-block" }} />
          &nbsp; / &nbsp;
          <GiAbstract004 style={{ display: "inline-block" }} />
        </div>
        <br />
        {match.team1_overs || 0}
        <br />
        <div>
          <GiTennisBall style={{ display: "inline-block" }} />
          &nbsp;&nbsp; overs
        </div>
      </div>
      <span>
        {/* V/S <br />
        {match.status == "live" && (
          <>
            <FcStart style={{ display: "inline-block" }} />{" "}
            {match.active == 1 ? match.team1 : match.team2}
          </>
        )} */}
      </span>
      <div className="result cricket">
        {match.team2_score || 0} <span className="sep">/</span>{" "}
        {match.team2_wickets || 0}
        <br />
        <div>
          <GiCricketBat style={{ display: "inline-block" }} />
          &nbsp; / &nbsp;
          <GiAbstract004 style={{ display: "inline-block" }} />
        </div>
        <br />
        {match.team2_overs || 0}
        <br />
        <div>
          <GiTennisBall style={{ display: "inline-block" }} />
          &nbsp;&nbsp; overs
        </div>
      </div>
    </>
  );
}

export function HockeyScore({ match }) {
  return (
    <>
      <div className="result hockey">
        {match.team1_goals || 0}
        <br />
        <span>
          <GiHockey style={{ display: "inline-block" }} />
          &nbsp;&nbsp; Goals
        </span>
      </div>
      <span>V/S</span>
      <div className="result hockey">
        {match.team2_goals || 0}
        <br />
        <span>
          <GiHockey style={{ display: "inline-block" }} />
          &nbsp;&nbsp; Goals
        </span>
      </div>
    </>
  );
}

export function BasketScore({ match }) {
  return (
    <>
      <div className="result basketball">
        {match.team1_score || 0}
        <br />
        <span>
          <GiBasketballBasket style={{ display: "inline-block" }} />
          &nbsp;&nbsp; Goals
        </span>
      </div>
      <span>V/S</span>
      <div className="result basketball">
        {match.team2_score || 0}
        <br />
        <span>
          <GiBasketballBasket style={{ display: "inline-block" }} />
          &nbsp;&nbsp; Goals
        </span>
      </div>
    </>
  );
}

export function LawnTennisScore({ match }) {
  let dot1 = [];
  let dot2 = [];
  let w1 = 0;
  let w2 = 0;

  for (let i = 1; i <= 5; i++) {
    if (i > match.active) {
      dot1.push(<div className="dot not-done"></div>);
      dot2.push(<div className="dot not-done"></div>);
    } else if (i == match.active) {
      dot1.push(<div className="dot playing"></div>);
      dot2.push(<div className="dot playing"></div>);
    } else if (match[`set${match.i}_score1`] < match[`set${match.i}_score2`]) {
      w2++;
      dot1.push(<div className="dot lose"></div>);
      dot2.push(<div className="dot won"></div>);
    } else if (match[`set${match.i}_score1`] > match[`set${match.i}_score2`]) {
      dot1.push(<div className="dot won"></div>);
      dot2.push(<div className="dot lose"></div>);
      w1++;
    } else {
      dot1.push(<div className="dot draw"></div>);
      dot2.push(<div className="dot draw"></div>);
    }
  }
  return (
    <>
      <div className="dot-box">{dot1}</div>
      <div className="result lawntt">
        <div className="set-box">
          <div className="title">
            {match.status == "live" ? `Set ${match.active}` : "Result"}
          </div>
          {match.status == "live"
            ? match[`set${match.active}_score1`] || 0
            : w1}
          <span className="sep">&nbsp; : &nbsp;</span>
          {match.status == "live"
            ? match[`set${match.active}_score2`] || 0
            : w2}
        </div>
      </div>
      <div className="dot-box">{dot2}</div>
    </>
  );
}
