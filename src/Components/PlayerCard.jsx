// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsGenderMale, BsGenderFemale, BsGenderTrans } from "react-icons/bs";

export default function PlayerCard(prop) {
  let data = prop.data;
  let gIcon =
    data.Gender == "male" ? (
      <BsGenderMale />
    ) : data.Gender == "female" ? (
      <BsGenderFemale />
    ) : (
      <BsGenderTrans />
    );
  return (
    <>
      <div className="player-card">
        <div className="image">
          <img
            src={data.photo}
            alt="Player Photo"
            className="player-image"
          />
        </div>
        <div className="name">{data.name || "----- ----"}</div>
        <div className="dual-data">
          <div className="college">{data.team || "None"}</div>
          <div className="gender">{gIcon}</div>
        </div>
        <div className="sport">{data.sport || "None"}</div>
      </div>
    </>
  );
}
