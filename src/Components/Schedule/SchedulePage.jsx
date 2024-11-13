import React, { useState, useEffect } from "react";
import MatchCardR from "./MatchCardR.jsx";
import { Input } from "antd";
import "../../css/Schedule.css";
import Database from "../../utils/Database";
import Transition from "../PageTransition/PageTransition.jsx";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { SearchOutlined } from "@ant-design/icons";

const limit = 10;

export default function SchedulePage({ pageStatus, role }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState(
    pageStatus !== "upcoming" ? "Basketball" : "All"
  );

  // Define sports lists based on role
  const studentSports = ["Basketball", "Lawn Tennis", "Hockey", "Volleyball", "Cricket", "Table Tennis"];
  const staffSports = ["Basketball", "Football", "Volleyball", "Table Tennis", "Tennis", "Cricket", "Badminton", "Squash", "Athletics"];

  // Select appropriate sports list based on role
  let sports = role !== "student" ? staffSports : studentSports;
  if (pageStatus === "upcoming") sports.unshift("All");

  const db = new Database();

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
  };

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
    <Transition>
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
              style={{ width: "100%", maxWidth: "90em", height: "3em" }}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.code !== "Enter") return;
                reset();
              }}
              placeholder="Search Match Here ..."
              suffix={<SearchOutlined className="search-icon" />}
            />
          </div>
          <div className="chips">
            {sports.map((sport) => (
              <div
                key={sport}
                className={sport === selectedSport ? "active-chip" : ""}
                onClick={() => changeSport(sport)}
              >
                <div>{sport}</div>
              </div>
            ))}
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
                className={`button load ${page === 1 ? "disable" : "active"}`}
                onClick={() => {
                  if (page === 1) return;
                  setPage((e) => e - 1);
                  setHasMore(true);
                  if (!isLoading) setToFetch(true);
                }}
              >
                <SlArrowLeft />
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
                <SlArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
