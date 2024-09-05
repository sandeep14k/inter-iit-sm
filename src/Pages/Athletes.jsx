import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../css/Athletes.css";
import { Input, Select } from "antd";
import PlayerCard from "../Components/PlayerCard";
import Database from "../utils/Database";

const { Option } = Select;
//
const Home = () => {
  const [athlete, setAthlete] = useState("");
  const [iit, setIIT] = useState("IITs");
  const [sport, setSport] = useState("Sport");

  let db = new Database();

  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    const res = await db.getPlayers();

    setPlayers([...res]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectBefore = (
    <Select
      style={{ minWidth: "130px" }}
      value={iit}
      onChange={(e) => setIIT(e)}
      defaultValue="IITs"
    >
      <Option value="IITs">IITs</Option>
      <Option value="IIT Madras">IIT Madras</Option>
      <Option value="IIT Delhi">IIT Delhi</Option>
      <Option value="IIT Bombay">IIT Bombay</Option>
      <Option value="IIT Guwahati">IIT Guwahati</Option>
      <Option value="IIT Kanpur">IIT Kanpur</Option>
      <Option value="IIT Kharagpur">IIT Kharagpur</Option>
      <Option value="IIT Roorkee">IIT Roorkee</Option>
      <Option value="IIT Dharwad">IIT Dharwad</Option>
      <Option value="IIT Ropar">IIT Ropar</Option>
      <Option value="IIT Hyderabad">IIT Hyderabad</Option>
      <Option value="IIT Indore">IIT Indore</Option>
      <Option value="IIT Dhanbad">IIT Dhanbad</Option>
      <Option value="IIT BHU">IIT BHU</Option>
      <Option value="IIT Patna">IIT Patna</Option>
      <Option value="IIT Gandhinagar">IIT Gandhinagar</Option>
      <Option value="IIT Bhubaneswar">IIT Bhubaneswar</Option>
      <Option value="IIT Mandi">IIT Mandi</Option>
      <Option value="IIT Jodhpur">IIT Jodhpur</Option>
      <Option value="IIT Tirupati">IIT Tirupati</Option>
      <Option value="IIT Bhilai">IIT Bhilai</Option>
      <Option value="IIT Jammu">IIT Jammu</Option>
      <Option value="IIT Palakkad">IIT Palakkad</Option>
      <Option value="IIT Goa">IIT Goa</Option>
    </Select>
  );
  const selectAfter = (
    <Select
      style={{ minWidth: "150px" }}
      value={sport}
      onChange={(e) => setSport(e)}
      defaultValue="Sport"
    >
      <Option value="Sport">Sport</Option>
      <Option value="Cricket">Cricket</Option>
      <Option value="Footballa">Footballa</Option>
      <Option value="Teble Tennice">Teble Tennice</Option>
    </Select>
  );

  let fplr = players.filter((v) => {
    let isClg = false;
    if (iit == "IITs") isClg = true;
    else if (v.College.toLowerCase() == iit.toLowerCase()) isClg = true;

    let isSpr = false;
    if (sport == "Sport") isSpr = true;
    else if (v.Sport.toLowerCase() == sport.toLowerCase()) isSpr = true;

    let isName = true;
    
    if (!athlete) isName = true;
    else if (v.Name.toLowerCase().search(athlete.toLowerCase()) == -1) isSpr = false;

    return isClg && isSpr && isName;
  });

  return (
    <div className="min-w-[100vw]">
      <Navbar />
      <div
        className="player-search-box"
        style={{
          padding: "10px 30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Input
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          value={athlete}
          style={{ width: "100%", maxWidth: "1000px" }}
          onChange={(e) => {
            setAthlete(e.target.value);
          }}
          placeholder="Search Best Player Here ..."
        />
      </div>
      <div style={{ minHeight: "60vh" }} className="player-card-box">
        {fplr.map((data, i) => (
          <PlayerCard key={i} data={data} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
