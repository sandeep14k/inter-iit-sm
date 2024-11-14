import { BsGenderMale, BsGenderFemale, BsGenderTrans } from "react-icons/bs";

export default function PlayerCard(prop) {
  let data = prop.data;
  let gIcon =
    data.gender == "Male" ? (
      <BsGenderMale />
    ) : data.gender == "Female" ? (
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
            width={180}
            height={180}
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
