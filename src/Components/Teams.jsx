import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import "../css/Teams.css"; // Link to your CSS file

const keyOfficials = [
  {
    name: "Dr. Pratik Sen",
    role: "Chairperson",
    email: "psen@iitk.ac.in",
    frontImage: "../../Contacts/pratik.jpg",
    // social: { 
    //   instagram: "https://www.instagram.com/___avisharma___/",
    //   facebook: "https://www.facebook.com/profile.php?id=100057527562934",
    //   linkedin: "https://www.linkedin.com/in/sharma-avi/"
    // }
  },
  {
    name: "Dr. Indra S. Sen",
    role: "Convener",
    email: "isen@iitk.ac.in",
    frontImage: "../../Contacts/Indra.jpeg",
    // social: { 
    //   instagram: "https://www.instagram.com/mukul.saini63/",
    //   facebook: "https://www.facebook.com/mukul.saini.1291",
    //   linkedin: "https://www.linkedin.com/in/mukul-saini-40b478242/"
    // }
  },
  {
    name: "Dr. Aditya H. Kelkar",
    role: "Co-Convener",
    email: "akelkar@iitk.ac.in",
    frontImage: "../../Contacts/aditya.jpg",
    // social: { 
    //   instagram: "https://www.instagram.com/mukul.saini63/",
    //   facebook: "https://www.facebook.com/mukul.saini.1291",
    //   linkedin: "https://www.linkedin.com/in/mukul-saini-40b478242/"
    // }
  },
  {
    name: "Dr. Sruti S. Ragavan",
    role: "Convener, Digital",
    email: "srutis@iitk.ac.in",
    frontImage: "../../Contacts/sruti.jpeg",
    // social: { 
    //   instagram: "https://www.instagram.com/mukul.saini63/",
    //   facebook: "https://www.facebook.com/mukul.saini.1291",
    //   linkedin: "https://www.linkedin.com/in/mukul-saini-40b478242/"
    // }
  },
  {
    name: "Mr. Hemant K. Tiwari",
    role: "Organising Secretary",
    email: "hktiwari@iitk.ac.in",
    frontImage: "../../Contacts/Hemant.jpg",
    // social: { 
    //   instagram: "https://www.instagram.com/mukul.saini63/",
    //   facebook: "https://www.facebook.com/mukul.saini.1291",
    //   linkedin: "https://www.linkedin.com/in/mukul-saini-40b478242/"
    // }
  },
  {
    name: "Avi",
    role: "Overall Coordinator",
    email: "savi20@iitk.ac.in",
    frontImage: "../../Contacts/aviF.png",
    // social: { 
    //   instagram: "https://www.instagram.com/___avisharma___/",
    //   facebook: "https://www.facebook.com/profile.php?id=100057527562934",
    //   linkedin: "https://www.linkedin.com/in/sharma-avi/"
    // }
  },
  {
    name: "Mukul",
    role: "Overall Coordinator",
    email: "mukuls21@iitk.ac.in",
    frontImage: "../../Contacts/mukulF.jpg",
    // social: { 
    //   instagram: "https://www.instagram.com/mukul.saini63/",
    //   facebook: "https://www.facebook.com/mukul.saini.1291",
    //   linkedin: "https://www.linkedin.com/in/mukul-saini-40b478242/"
    // }
  }
];

const overallCoordinators = [
  {
    name: "Avi",
    role: "Overall Coordinator",
    email: "savi20@iitk.ac.in",
    frontImage: "../../Contacts/aviF.png",
    social: { 
      instagram: "https://www.instagram.com/___avisharma___/",
      facebook: "https://www.facebook.com/profile.php?id=100057527562934",
      linkedin: "https://www.linkedin.com/in/sharma-avi/"
    }
  },
  {
    name: "Mukul",
    role: "Overall Coordinator",
    email: "mukuls21@iitk.ac.in",
    frontImage: "../../Contacts/mukulF.jpg",
    social: { 
      instagram: "https://www.instagram.com/mukul.saini63/",
      facebook: "https://www.facebook.com/mukul.saini.1291",
      linkedin: "https://www.linkedin.com/in/mukul-saini-40b478242/"
    }
  }
];

const teamMembers = [
  {
    name: "Ujjawal",
    role: "Web & App",
    email: "ujjawal22@iitk.ac.in",
    frontImage: "../../Contacts/ujjawalF.png",
    social: { 
      instagram: "https://www.instagram.com/_ujjwalchoudhary_/?hl=en",
      facebook: null, 
      linkedin: "https://www.linkedin.com/in/ujjwal-choudhary-iitkanpur/"
    }
  },
  {
    name: "Priyanshu",
    role: "Web & App",
    email: "priyanshum21@iitk.ac.in",
    frontImage: "../../Contacts/priyanshuF.png",
    social: { 
      instagram: "https://www.instagram.com/pm020202pm/",
      facebook: null, 
      linkedin: "https://www.linkedin.com/in/pm020202pm/"
    }
  },
  {
    name: "Nitin",
    role: "Events",
    email: "niting21@iitk.ac.in",
    frontImage: "../../Contacts/nitinF.jpg",
    social: { 
      instagram: null, 
      facebook: null, 
      linkedin: "https://www.linkedin.com/in/nitin-garhwal-03a71724b/"
    }
  },
  {
    name: "Pravesh",
    role: "Events",
    email: "praveshm21@iitk.ac.in",
    frontImage: "../../Contacts/praveshF.png",
    social: { 
      instagram: "https://www.instagram.com/pravesh_3553/",
      facebook: "https://www.facebook.com/share/1AzrB9ubRn/",
      linkedin: "https://www.linkedin.com/in/pravesh-meena-9b67aa229"
    }
  },
  {
    name: "Netraj",
    role: "Media and Publicity",
    email: "netraj21@iitk.ac.in",
    frontImage: "../../Contacts/netrajF.JPG",
    social: { 
      instagram: "https://www.instagram.com/netrajj?igsh=MTVkeDljcGZrZzkwdQ%3D%3D&utm_source=qr",
      facebook: "https://www.facebook.com/profile.php?id=100074911556032",
      linkedin: "https://www.linkedin.com/in/netraj-pankaj-rane-517039224/"
    }
  },
  {
    name: "Sushant",
    role: "Media and Publicity",
    email: "sushantf21@iitk.ac.in",
    frontImage: "../../Contacts/sushantF.png",
    social: { 
      instagram: "https://www.instagram.com/sushant_faujdar_/",
      facebook: "https://www.facebook.com/sushant.faujdar",
      linkedin: "https://www.linkedin.com/in/sushantf21/"
    }
  },
  {
    name: "Jayant",
    role: "Hospitality",
    email: "jayantn21@iitk.ac.in",
    frontImage: "../../Contacts/jayantF.png",
    social: { 
      instagram: "https://www.instagram.com/jayant_.nagar/?hl=en",
      facebook: null, 
      linkedin: "https://www.linkedin.com/in/jayant-naagar/"
    }
  },
  {
    name: "Shivani",
    role: "Hospitality",
    email: "shivani21@iitk.ac.in",
    frontImage: "../../Contacts/shivaniF.png",
    social: { 
      instagram: "https://www.instagram.com/shixvani__/",
      facebook: "https://www.linkedin.com/in/shivani-2107a9229",
      linkedin: null 
    }
  },
  {
    name: "Nishant",
    role: "Hospitality",
    email: "nishantp21@iitk.ac.in",
    frontImage: "../../Contacts/patelF.jpg",
    social: { 
      instagram: "https://www.instagram.com/_nishantp_0605/",
      facebook: "https://www.facebook.com/profile.php?id=100015007967815",
      linkedin: "https://www.linkedin.com/in/nishant-patel-113b78231"
    }
  },
  {
    name: "Naveen",
    role: "Public Relations",
    email: "naveenm21@iitk.ac.in",
    frontImage: "../../Contacts/naveenF.png",
    social: { 
      instagram: null, 
      facebook: null, 
      linkedin: "https://www.linkedin.com/in/naveen-meenia-639500283/"
    }
  },
  {
    name: "Manuja",
    role: "Public Relations",
    email: "manujap21@iitk.ac.in",
    frontImage: "../../Contacts/manujaF.png",
    social: { 
      instagram: "https://www.instagram.com/manujaa08/",
      facebook: null, 
      linkedin: "https://www.linkedin.com/in/manuja-pandey-095b26241/"
    }
  },
  {
    name: "Keshav",
    role: "Show Management",
    email: "keshavc21@iitk.ac.in",
    frontImage: "../../Contacts/keshavF.png",
    social: { 
      instagram: "https://www.instagram.com/keshav_chauhan_04/",
      facebook: "https://www.facebook.com/keshav.chauhan.12720?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/keshav-chauhan-b02bbb231"
    }
  },
  {
    name: "Kartik",
    role: "Show Management",
    email: "kartikv21@iitk.ac.in",
    frontImage: "../../Contacts/kartikF.png",
    social: { 
      instagram: "https://www.instagram.com/kartikv21/",
      facebook: "https://www.facebook.com/profile.php?id=100075444030031",
      linkedin: null 
    }
  },
  {
    name: "Nikhil",
    role: "Show Management",
    email: "nikhils21@iitk.ac.in",
    frontImage: "../../Contacts/nikhilF.png",
    social: { 
      instagram: "https://www.instagram.com/nikhilsharma.__/",
      facebook: null, 
      linkedin: "https://www.linkedin.com/in/nikhil-kumar-sharma-53b046252/"
    }
  },
  {
    name: "Aakansh",
    role: "Security",
    email: "aakanshc21@iitk.ac.in",
    frontImage: "../../Contacts/aakanshF.PNG",
    social: { 
      instagram: "https://www.instagram.com/aakanshchandra/", 
      facebook: null, 
      linkedin: "www.linkedin.com/in/aakansh-chandra-43a0a6239" 
    }
  },
  {
    name: "Mayank",
    role: "Security",
    email: "mshekhar21@iitk.ac.in",
    frontImage: "../../Contacts/mayankF.png",
    social: { 
      instagram: "https://www.instagram.com/mayank___shekhar/",
      facebook: null, 
      linkedin: "https://www.linkedin.com/in/mayank-shekhar-a71589232"
    }
  },
  {
    name: "Sahil",
    role: "Marketing",
    email: "sahil21@iitk.ac.in",
    frontImage: "../../Contacts/sahilF.jpg",
    social: { 
      instagram: "https://www.instagram.com/_sahiljangra07/",
      facebook: "https://www.facebook.com/profile.php?id=100075457655438",
      linkedin: "https://www.linkedin.com/in/sahil-jangra-286257241/"
    }
  },
  {
    name: "Pratham",
    role: "Finance",
    email: "prathamg21@iitk.ac.in",
    frontImage: "../../Contacts/prathamF.jpeg",
    social: { 
      instagram: "https://www.instagram.com/prath_2995?igsh=MXRuYXd2Nzhqd3M2Yw%3D%3D&utm_source=qr",
      facebook: null, 
      linkedin: "https://www.linkedin.com/in/pratham-gupta-a0b4321b8/?originalSubdomain=in"
    }
  },
  {
    name: "Rudraksh",
    role: "Design",
    email: "rudraksh22@iitk.ac.in",
    frontImage: "../../Contacts/rudrakshF.png",
    social: { 
      instagram: "https://www.instagram.com/asliruddu/",
      facebook: "https://www.facebook.com/profile.php?id=100086966641157&mibextid=LQQJ4d",
      linkedin: null 
    }
  },
  {
    name: "Shivam",
    role: "Design",
    email: "shivamr22@iitk.ac.in",
    frontImage: "../../Contacts/shivamF.png",
    social: { 
      instagram: "https://www.instagram.com/shiv.wrath_04/",
      facebook: "https://www.facebook.com/share/ngCeb8wvMHR4LQdG/",
      linkedin: "https://www.linkedin.com/in/shivam-rathore-559195259"
    }
  }
];
  


const Teams = () => {
  return (
    <>
      <div className="team-heading">Key Officials</div>

      <div className="coreteam-grid">
        {keyOfficials.map((member, index) => {
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
                  <h5>{member.name.toUpperCase()}</h5>
                  {/* {names.length > 1 && <h4>{names[1].toUpperCase()}</h4>} */}
                  <p>{member.role}</p>
                  <p className="email">{member.email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
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
      {/* <div className="team-heading">Overall Coordinators</div>

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
      </div> */}
    </>
  );
};

export default Teams;
