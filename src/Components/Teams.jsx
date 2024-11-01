import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import "../css/Teams.css"; // Link to your CSS file

const overallCoordinators = [
  {
    name: "Avi",
    role: "Overall Coordinator",
    email: "savi20@iitk.ac.in",
    frontImage: "../../Contacts/aviF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Mukul",
    role: "Overall Coordinator",
    email: "mukuls21@iitk.ac.in",
    frontImage: "../../Contacts/aviF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  }
];

const teamMembers = [
  {
    name: "Nitin",
    role: "Head, Events",
    email: "niting21@iitk.ac.in",
    frontImage: "../../Contacts/nitinF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  // Add other team members as per your data structure
  {
    name: "Pravesh",
    role: "Events",
    email: "praveshm21@iitk.ac.in",
    frontImage: "../../Contacts/praveshF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Pratham",
    role: "Finance",
    email: "prathamg21@iitk.ac.in",
    frontImage: "../../Contacts/prathamF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Netraj",
    role: "Media and Publicity",
    email: "netraj21@iitk.ac.in",
    frontImage: "../../Contacts/netrajF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Sushant",
    role: "Media and Publicity",
    email: "sushantf21@iitk.ac.in",
    frontImage: "../../Contacts/sushantF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Jayant",
    role: "Hospitality",
    email: "jayantn21@iitk.ac.in",
    frontImage: "../../Contacts/jayantF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Shivani",
    role: "Hospitality",
    email: "shivani21@iitk.ac.in",
    frontImage: "../../Contacts/shivaniF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Nishant",
    role: "Hospitality",
    email: "nishantp21@iitk.ac.in",
    frontImage: "../../Contacts/nishantF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Naveen",
    role: "Public Relations",
    email: "naveenm21@iitk.ac.in",
    frontImage: "../../Contacts/naveenF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Manuja",
    role: "Public Relations",
    email: "manujap21@iitk.ac.in",
    frontImage: "../../Contacts/manujaF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Sahil",
    role: "Marketing",
    email: "sahil21@iitk.ac.in",
    frontImage: "../../Contacts/sahilF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Prasang",
    role: "Marketing",
    email: "prasangv21@iitk.ac.in",
    frontImage: "../../Contacts/prasangF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Keshav",
    role: "Show Management",
    email: "keshavc21@iitk.ac.in",
    frontImage: "../../Contacts/keshavF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Kartik",
    role: "Show Management",
    email: "kartikv21@iitk.ac.in",
    frontImage: "../../Contacts/kartikF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Nikhil",
    role: "Show Management",
    email: "nikhils21@iitk.ac.in",
    frontImage: "../../Contacts/nikhilF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Mayank",
    role: "Security",
    email: "mshekhar21@iitk.ac.in",
    frontImage: "../../Contacts/mayankF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Ujjawal",
    role: "Web & App",
    email: "ujjawal22@iitk.ac.in",
    frontImage: "../../Contacts/ujjawalF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Priyanshu",
    role: "Web & App",
    email: "priyanshum21@iitk.ac.in",
    frontImage: "../../Contacts/priyanshuF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Rudraksh",
    role: "Design",
    email: "rudraksh22@iitk.ac.in",
    frontImage: "../../Contacts/rudrakshF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
  {
    name: "Shivam",
    role: "Design",
    email: "shivamr22@iitk.ac.in",
    frontImage: "../../Contacts/shivamF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  }
];

const Teams = () => {
  return (
    <>
      <div className="team-heading">Core Team</div>

      <div className="coreteam-grid">
        {teamMembers.map((member, index) => {
          const names = member.name.split(" ");
          return (
            <div key={index} className="stacked-layer">
              <div className="border-box"></div>
              <div className="coreteam-card">
                <div className="card-image">
                  <img
                    src={member.frontImage}
                    alt={`${member.name} Profile`}
                    width={187.22}
                    height={202}
                    className="profile-img"
                  />
                </div>
                <div className="coreteam-card-content">
                  <h3>{names[0].toUpperCase()}</h3>
                  {names.length > 1 && <h4>{names[1].toUpperCase()}</h4>}
                  <p>{member.role}</p>
                  <p className="email">{member.email}</p>
                </div>
              </div>
              <div className="coreteam-card-hover">
                <div className="social-icons-coreteam">
                  <a href={member.social.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={member.social.facebook} target="_blank" rel="noreferrer">
                    <FaFacebook />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="team-heading">Overall Coordinators</div>

      <div className="coreteam-grid">
        {overallCoordinators.map((member, index) => {
          const names = member.name.split(" ");
          return (
            <div key={index} className="stacked-layer">
              <div className="border-box"></div>
              <div className="coreteam-card">
                <div className="card-image">
                  <img
                    src={member.frontImage}
                    alt={`${member.name} Profile`}
                    className="profile-img"
                  />
                </div>
                <div className="coreteam-card-content">
                  <h3>{names[0].toUpperCase()}</h3>
                  {names.length > 1 && <h4>{names[1].toUpperCase()}</h4>}
                  <p>{member.role}</p>
                  <p className="email">{member.email}</p>
                </div>
              </div>
              <div className="coreteam-card-hover">
                <div className="social-icons-coreteam">
                  <a href={member.social.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={member.social.facebook} target="_blank" rel="noreferrer">
                    <FaFacebook />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Teams;
