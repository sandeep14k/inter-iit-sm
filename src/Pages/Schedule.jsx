import React, { useState, useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ScheduleCard from "../Components/Schedule/ScheuleCard.jsx";
import MatchCardR from "../Components/MatchCardR.jsx";
import { Input, Select, DatePicker, Space } from "antd";
import "../css/Schedule.css";
import Database from "../utils/Database";

const { Option } = Select;

const limit = 10;

const Schedule = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("Sport");
  const [selectedDate, setSelectedDate] = useState(undefined);

  let db = new Database();
  const listInnerRef = useRef();

  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [toFetch, setToFetch] = useState(true);

  const selectBefore = (
    <Space direction="vertical">
      <DatePicker
        style={{ minWidth: "120px" }}
        onChange={(e) => {
          if(!e) setSelectedDate(undefined);
          else setSelectedDate(new Date(e.$d));
        }}
      />
    </Space>
  );

  const selectAfter = (
    <Select
      style={{ minWidth: "100px" }}
      value={selectedSport}
      onChange={(e) => setSelectedSport(e)}
      defaultValue="Sport"
    >
      <Option value="Sport">Sport</Option>
      <Option value="hockey">hockey</Option>
      <Option value="lawn tennis">lawn tennis</Option>
      <Option value="basketball">basketball</Option>
      <Option value="volleyball">volleyball</Option>
      <Option value="cricket">cricket</Option>
      <Option value="table tennis">table tennis</Option>
    </Select>
  );

  const fetchData = async () => {
    if (!toFetch || isLoading || !hasMore) return;
    setIsLoading(true);

    const data = await db.getMatches(page, limit, searchQuery);
    setPage((prevPage) => prevPage + 1);
    setMatches((prevMatches) => [...prevMatches, ...data]);
    if (data.length < limit) {
      setHasMore(false);
    }

    setIsLoading(false);
    setToFetch(false);
  };

  useEffect(() => {
    if (toFetch) fetchData();
  }, [toFetch]);

  let filtered_matches = matches.filter((v) => {
    if (v.status != "upcoming") return;

    let td = new Date(v.time);
    let isdate = true;
    if(!selectedDate){}
    else if (
      selectedDate != undefined &&
      (td.getDate() != selectedDate.getDate() ||
        td.getMonth() != selectedDate.getMonth() ||
        td.getFullYear() != selectedDate.getFullYear())
    ) isdate = false;

    let isSpr = false;
    if (selectedSport == "Sport") isSpr = true;
    else if (v.sport.toLowerCase() == selectedSport.toLowerCase()) isSpr = true;

    return isSpr && isdate;
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
          value={searchQuery}
          style={{ width: "100%", maxWidth: "1000px" }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.code !== "Enter") return;
            setPage(1);
            setMatches([]);
            setHasMore(true);
            setToFetch(true);
          }}
          placeholder="Search Best Player Here ..."
        />
      </div>

      <div ref={listInnerRef} className="cardbox">
        {filtered_matches.length > 0 ? (
          filtered_matches.map((match, index) => (
            <MatchCardR match={match} key={index} />
          ))
        ) : (
          <p>No Matches found.</p>
        )}

        {matches.length > 0 && hasMore ? (
          <>
            <div className="fbreak"></div>
            <button
              className="button load"
              onClick={() => {
                if (!isLoading) setToFetch(true);
              }}
            >
              {isLoading ? "Loading..." : "Load More"}
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;
