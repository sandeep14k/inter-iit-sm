import React from 'react'
import Teams from '../Components/Teams'
import CoreTeamCard from "../Components/coreTeamCard";
// import "../css/Contacts.css";

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
    role: "Events",
    email: "niting21@iitk.ac.in",
    frontImage: "../../Contacts/nitinF.png",
    social: { instagram: "#", facebook: "#", linkedin: "#" }
  },
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

const Contacts = () => {
  return (
    <>
      {/* <div className="team-heading">
        Core Team
        {/* <div>
          <hr className="custom-line" />
        </div> */}
      {/* </div>
      <div style={{ minHeight: "60vh" }} className="coreTeam-card-box">
        {teamMembers.length == 0 ? "No Players Found": teamMembers.map((data, i) => (
          <CoreTeamCard key={i} data={data} />
        ))}
      </div>
      <div className="team-heading">
        Overall Coordinators
        {/* <div>
          <hr className="custom-line" />
        </div> */}
      {/* </div>
      <div style={{ minHeight: "60vh" }} className="coreTeam-card-box">
        {overallCoordinators.length == 0 ? "No Players Found": overallCoordinators.map((data, i) => (
          <CoreTeamCard key={i} data={data} />
        ))}
      </div> */} 
      <Teams/>
    </>
  )
}

export default Contacts