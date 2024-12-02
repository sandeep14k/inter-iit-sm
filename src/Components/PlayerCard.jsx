import { BsGenderMale, BsGenderFemale, BsGenderTrans } from "react-icons/bs";

export default function PlayerCard(prop) {
  let data = prop.data;
  const email = data.email.toLowerCase();
  const team = data.team;
  const collegeFolder = team.split(" ")[1].toLowerCase();
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
            src={`https://firebasestorage.googleapis.com/v0/b/iism2024.appspot.com/o/studentPhotos%2F${collegeFolder}%2F${email}.jpg?alt=media`}
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
