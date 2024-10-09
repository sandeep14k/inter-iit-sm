import React, { useState, useEffect } from "react";
import Footer from "../Footer.jsx";
import Navbar from "../Navbar.jsx";
import MatchCardR from "./MatchCardR.jsx";
import { Input, Select, DatePicker, Space } from "antd";
import "../../css/Schedule.css";
import Database from "../../utils/Database";

const { Option } = Select;

const limit = 10;

export default function SchedulePage({ pageStatus }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("Sport");
  const [selectedDate, setSelectedDate] = useState(undefined);

  let db = new Database();

  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [toFetch, setToFetch] = useState(true);

  const reset = () => {
    setMatches([]);
    setPage(1);
    setHasMore(true);
    setToFetch(true);
  };

  const selectBefore = (
    <Space direction="vertical">
      <DatePicker
        style={{ minWidth: "120px" }}
        onChange={(e) => {
          if (!e) setSelectedDate(undefined);
          else setSelectedDate(new Date(e.$d));

          reset();
        }}
      />
    </Space>
  );

  const selectAfter = (
    <Select
      style={{ minWidth: "100px" }}
      value={selectedSport}
      onChange={(e) => {
        setSelectedSport(e);
        reset();
      }}
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

    let date;
    if (selectedDate)
      date =
        selectedDate.getFullYear() +
        ":" +
        (parseInt(selectedDate.getMonth()) + 1) +
        ":" +
        selectedDate.getDate();

    const data = await db.getMatches(
      page,
      limit,
      searchQuery,
      date,
      selectedSport,
      pageStatus
    );
    if (data.length < limit) {
      setHasMore(false);
    }
    if (data.length > 0) setMatches(data);

    setIsLoading(false);
    setToFetch(false);
  };

  useEffect(() => {
    if (toFetch) fetchData();
  }, [toFetch]);

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
            reset();
          }}
          placeholder="Search Best Player Here ..."
        />
      </div>

      <div className="cardbox">
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <MatchCardR match={match} key={index} />
          ))
        ) : !isLoading ? (
          <p>No Matches found.</p>
        ) : (
          ""
        )}

        <div className="next-pre-box">
          <button
            className={`button load ${page == 1 ? "disable" : "active"}`}
            onClick={() => {
              if (page == 1) return;
              setPage((e) => e - 1);
              setHasMore(true)
              if (!isLoading) setToFetch(true);
            }}
          >
            Previos
          </button>
          <button
            className={`button load ${!hasMore ? "disable" : "active"}`}
            onClick={() => {
              if (!hasMore) return;
              setPage((e) => e + 1);
              if (!isLoading) setToFetch(true);
            }}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
