import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../css/Athletes.css";
import { Input, Select } from "antd";
import PlayerCard from "../Components/PlayerCard";
import Database from "../utils/Database";

const { Option } = Select;

const limit = 20;

const Home = () => {
  const [athlete, setAthlete] = useState("");
  const [iit, setIIT] = useState("IITs");
  const [sport, setSport] = useState("Sport");

  let db = new Database();

  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [toFetch, setToFetch] = useState(true);

  const reset = () => {
    setPlayers([]);
    setPage(1);
    setHasMore(true);
    setToFetch(true);
  };

  const fetchData = async () => {
    if (!toFetch || loading || !hasMore) return;
    setLoading(true);

    const data = await db.getPlayers(page, limit, athlete, sport, iit);
    if (data.length < limit) {
      setHasMore(false);
    }

    if(data.length > 0) setPlayers(data);

    setLoading(false);
    setToFetch(false);
  };

  useEffect(() => {
    fetchData();
  }, [toFetch]);

  const selectBefore = (
    <Select
      style={{ minWidth: "130px" }}
      value={iit}
      onChange={(e) => {
        setIIT(e);
        reset();
      }}
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
      style={{ width: "110px" }}
      value={sport}
      onChange={(e) => {
        setSport(e);
        reset();
      }}
    >
      <Option value="Sport">Sport</Option>
      <Option value="hockey">Hockey</Option>
      <Option value="lawn tennis">Lawn Tennis</Option>
      <Option value="basketball">Basketball</Option>
      <Option value="volleyball">Volleyball</Option>
      <Option value="cricket">Cricket</Option>
      <Option value="table tennis">Table Tennis</Option>
    </Select>
  );

  return (
    <div className="min-w-[100vw]">
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
          onKeyUp={(e) => {
            if (e.code !== "Enter") return;
            reset();
          }}
          placeholder="Search Best Player Here ..."
        />
      </div>
      <div style={{ minHeight: "60vh" }} className="player-card-box">
        {players.length == 0 ? "No Players Found": players.map((data, i) => (
          <PlayerCard key={i} data={data} />
        ))}
      </div>

      <div className="next-pre-box">
        <button
          className={`button load ${page == 1 ? "disable" : "active"}`}
          onClick={() => {
            if (page == 1) return;
            setPage((e) => e - 1);
            setHasMore(true);
            if (!loading) setToFetch(true);
          }}
        >
          Previous
        </button>
        <button
          className={`button load ${!hasMore ? "disable" : "active"}`}
          onClick={() => {
            if (!hasMore) return;
            setPage((e) => e + 1);
            if (!loading) setToFetch(true);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
