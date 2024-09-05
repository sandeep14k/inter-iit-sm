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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s"
            alt="Player Photo"
            className="player-image"
          />
        </div>
        <div className="name">{data.Name}</div>
        <div className="dual-data">
          <div className="college">{data.College}</div>
          <div className="gender">{gIcon}</div>
        </div>
        <div className="sport">{data.Sport}</div>
      </div>
    </>
  );
}
