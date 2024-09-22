import React from 'react';
import '../css/new.css';

function MatchCardR() {
  const IITs = [
    {
      name: "IIT Bombay",
      img: "../../IITs_Logo/Bombay.svg",
    },
    {
      name: "IIT Delhi",
      img: "../../IITs_Logo/Delhi.jpg",
    },
    {
      name: "IIT Madras",
      img: "../../IITs_Logo/Madras.jpg",
    },
    {
      name: "IIT Kanpur",
      img: "../../IITs_Logo/Kanpur.svg",
    },
    {
      name: "IIT Kharagpur",
      img: "../../IITs_Logo/KGP.jpg",
    },
    {
      name: "IIT Roorkee",
      img: "../../IITs_Logo/Roorkee.svg",
    },
    {
      name: "IIT Guwahati",
      img: "../../IITs_Logo/Guwahati.jpg",
    },
    {
      name: "IIT Hyderabad",
      img: "../../IITs_Logo/Hyderabad.jpg",
    },
    {
      name: "IIT Indore",
      img: "../../IITs_Logo/Indore.jpg",
    },
    {
      name: "IIT Varanasi (BHU)",
      img: "../../IITs_Logo/BHU.jpg",
    },
    {
      name: "IIT Jodhpur",
      img: "../../IITs_Logo/Jodhpur.jpg",
    },
    {
      name: "IIT Mandi",
      img: "../../IITs_Logo/Mandi.jpg",
    },
    {
      name: "IIT Patna",
      img: "../../IITs_Logo/Patna.jpg",
    },
    {
      name: "IIT Ropar",
      img: "../../IITs_Logo/Ropar.jpg",
    },
    {
      name: "IIT Bhubaneswar",
      img: "../../IITs_Logo/Bhubaneshwar.jpg",
    },
    {
      name: "IIT Gandhinagar",
      img: "../../IITs_Logo/Gandhinagar.jpg",
    },
    {
      name: "IIT (ISM) Dhanbad",
      img: "../../IITs_Logo/Dhanbad.jpg",
    },
    {
      name: "IIT Bhilai",
      img: "../../IITs_Logo/Bhilai.jpg",
    },
    {
      name: "IIT Goa",
      img: "../../IITs_Logo/Goa.jpg",
    },
    {
      name: "IIT Jammu",
      img: "../../IITs_Logo/Jammu.jpg",
    },
    {
      name: "IIT Dharwad",
      img: "../../IITs_Logo/Dharwad.jpg",
    },
    {
      name: "IIT Palakkad",
      img: "../../IITs_Logo/Palakkad.jpg",
    },
    {
      name: "IIT Tirupati",
      img: "../../IITs_Logo/Tirupati.jpg",
    },
  ];
  return (
    <div className="match-card">
    <div className="team team-left">
      <img src="#" alt="IIT Logo" className="team-logo" />
      <span>IIT Bombay</span>
    </div>
    <div className="match-info">
      <div className="match-time-format">
        <span>5th December</span>
        <span style={{ fontSize: '20px', color: '#444', fontStyle: 'italic' }}> 10:30 AM</span>
      </div>
      <div className="match-details">
        Venue
      </div>
    </div>
    <div className="team team-right">
      <span>IIT Kanpur</span>
      <img src="#" alt="IIT Logo" className="team-logo" />
    </div>
  </div>
  );
}


export default MatchCardR;