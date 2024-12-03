import { IoMaleFemaleSharp, IoMaleSharp, IoFemaleSharp } from "react-icons/io5";

const IITs = {
  "IIT BOMBAY": "/IITs_Logo/Bombay.svg",
  "IIT DELHI": "/IITs_Logo/Delhi.jpg",
  "IIT MADRAS": "/IITs_Logo/Madras.jpg",
  "IIT KANPUR": "/IITs_Logo/Kanpur.svg",
  "IIT KHARAGPUR": "/IITs_Logo/KGP.jpg",
  "IIT ROORKEE": "/IITs_Logo/Roorkee.svg",
  "IIT GUWAHATI": "/IITs_Logo/Guwahati.jpg",
  "IIT HYDERABAD": "/IITs_Logo/Hyderabad.jpg",
  "IIT INDORE": "/IITs_Logo/Indore.jpg",
  "IIT BHU": "/IITs_Logo/BHU.jpg",
  "IIT JODHPUR": "/IITs_Logo/Jodhpur.jpg",
  "IIT MANDI": "/IITs_Logo/Mandi.jpg",
  "IIT PATNA": "/IITs_Logo/Patna.jpg",
  "IIT ROPAR": "/IITs_Logo/Ropar.jpg",
  "IIT BHUBANESWAR": "/IITs_Logo/Bhubaneswar.jpg",
  "IIT GANDHINAGAR": "/IITs_Logo/Gandhinagar.jpg",
  "IIT DHANBAD": "/IITs_Logo/Dhanbad.jpg",
  "IIT BHILAI": "/IITs_Logo/Bhilai.jpg",
  "IIT GOA": "/IITs_Logo/Goa.jpg",
  "IIT JAMMU": "/IITs_Logo/Jammu.jpg",
  "IIT DHARWAD": "/IITs_Logo/Dharwad.jpg",
  "IIT PALAKKAD": "/IITs_Logo/Palakkad.jpg",
  "IIT TIRUPATI": "/IITs_Logo/Tirupati.jpg",
};

export function SportName({ match }) {
  return (
    <span className="sport-name">
      {match.sport.toUpperCase()} &nbsp;
      {match.category == "MEN" ? (
        <IoMaleSharp style={{ display: "inline-block" }} />
      ) : match.category == "WOMEN" ? (
        <IoFemaleSharp style={{ display: "inline-block" }} />
      ) : (
        <IoMaleFemaleSharp style={{ display: "inline-block" }} />
      )}
    </span>
  );
}

export function TeamLogo({ team }) {
  return (
    <div className="team team-left">
      <img src={IITs[team].toUpperCase()} alt="IIT Logo" className="team-logo" />
      <div className="team-name">{team.toUpperCase()}</div>
    </div>
  );
}
