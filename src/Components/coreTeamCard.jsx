// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGenderMale, BsGenderFemale, BsGenderTrans, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function CoreTeamCard(prop) {
  let data = prop.data;
  console.log(data);
  return (
    <>
      <div className="coreTeam-card">
        <div className="image">
          <img
            src={data.frontImage}
            alt="Player Photo"
            className="coreTeam-image"
            width={180}
            height={180}
          />
        </div>
        <div className="name">{data.name || "----- ----"}</div>
        {/* <div className="dual-data">
          <div className="college">{data.email || "None"}</div>
        </div> */}
        <div className="sport">Head</div>
        <div className="sport">{data.role || "None"}</div>
        
        <div className="social-media-icons">
          <a href={data.facebook} target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
          <a href={data.twitter} target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
          <a href={data.linkedin} target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </div>
        </div>

      
    </>
  );
}
