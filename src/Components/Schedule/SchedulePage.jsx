import React, { useState, useEffect } from "react";
import Footer from "../Footer.jsx";
import Navbar from "../Navbar.jsx";
import MatchCardR from "./MatchCardR.jsx";
import { Input } from "antd";
import "../../css/Schedule.css";
import Database from "../../utils/Database";

const limit = 10;

export default function SchedulePage({ pageStatus }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState(
    pageStatus != "upcoming" ? "Hockey" : "All"
  );

  let sports = ["Hockey","Lawn Tennis","Basketball","Volleyball","Cricket","Table Tennis"];
  if(pageStatus == "upcoming") sports.unshift("All");

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

  const changeSport = (spr) => {
    setSelectedSport(spr);
    reset();
    setToFetch(true);
  }

  const fetchData = async () => {
    if (!toFetch || isLoading || !hasMore) return;
    setIsLoading(true);

    const data = await db.getMatches(
      page,
      limit,
      searchQuery,
      selectedSport.toLowerCase(),
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
    <div className="schedule-page">
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
          value={searchQuery}
          style={{ width: "100%", maxWidth: "1000px" }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.code !== "Enter") return;
            reset();
          }}
          placeholder="Search Match Here ..."
        />
      </div>
        <div className="chips">
          {sports.map((e) => <div className={e == selectedSport && "active-chip"} onClick={() => changeSport(e)}> <div>{e}</div> </div>)}
        </div>

      <div className="cardbox">
        {matches.length > 0 ? (
          matches.map((match) => (
            <MatchCardR match={match} key={match.matchID} />
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
              setHasMore(true);
              if (!isLoading) setToFetch(true);
            }}
          >
            Previous
          </button>
          <span>{page}</span>
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
    </div>
    </div>
  );
}
