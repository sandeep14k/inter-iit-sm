import React, { useState, useEffect, useRef } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import MatchCardSection from "../Components/MatchCardSection";
import Timeline from "../Components/Timeline";
import { Input, Select } from "antd";
import Sportsfilter from "../Components/Sportsfilter";
import "../css/Schedule.css";
import axios from "axios";

const { Option } = Select;

const Schedule = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  /// //////////////////////////////////
  const listInnerRef = useRef();

  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Adjust the limit as per your needs
  const [sortBy, setSortBy] = useState("date"); // Default sort by 'date'
  const [order, setOrder] = useState("asc"); // Order can be 'asc' or 'desc'
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [toFetch, setToFetch] = useState(true);
  /// //////////////////////////////////

  const [iit, setIIT] = useState("IITs");
  const [Date, setDate] = useState("Date");
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
      value={Date}
      onChange={(e) => setDate(e)}
      defaultValue="Date"
    >
      <Option value="Sport">time</Option>
    </Select>
  );

  //////////////////////////////////////////////////
  const fetchMatches = async () => {
    if (!toFetch || isLoading || !hasMore) return;

    setIsLoading(true);
    const apiUrl = `http://localhost:3000/api/matches?page=${page}&limit=${limit}&sortBy=${"time"}&order=${order}&search=${searchQuery}`;

    try {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        const data = response.data;
        setMatches((prevMatches) => [...prevMatches, ...data.matches]);

        if (data.matches.length < limit) {
          setHasMore(false);
        }

        setPage((prevPage) => prevPage + 1);
      } else {
        console.log("Failed to load matches");
      }
    } catch (error) {
      console.error("Error fetching matches:", error);
      console.log(error);
    }

    setIsLoading(false);
    setToFetch(false);
  };

  useEffect(() => {
    fetchMatches();
  }, [toFetch]);

  //////////////////////////////////////////////////

  return (
    <div className="min-w-[100vw]">
      <Navbar />

      {/* ///////////////////////////////////////////////////// */}
      <div ref={listInnerRef} className="cardbox">
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <div key={index} className="match-card">
              <div className="details">
                <h3>Match {match.matchId}</h3>
                <p className="dete-font">Pool A</p>
                <div className="time">
                  <p className="dete-font">Time:{match.time}</p>
                  <p className="dete-font">Venue:{match.venue}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No matches found.</p>
        )}
        <div className="fbreak"></div>
        <button
          className="button load"
          onClick={() => {
            if(!isLoading)
            setToFetch(true);
          }}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
      {/* ///////////////////////////////////////////////////// */}
      <Footer />
    </div>
  );
};

export default Schedule;
