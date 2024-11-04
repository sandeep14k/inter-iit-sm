import { IoMaleFemaleSharp, IoMaleSharp, IoFemaleSharp } from "react-icons/io5";

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

export function SportName({ match }) {
  return (
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
  );
}

export function TeamLogo({ team }) {
  return (
    <div className="team team-left">
      <img src={IITs[team]} alt="IIT Logo" className="team-logo" />
      <div className="team-name">{team}</div>
    </div>
  );
}
