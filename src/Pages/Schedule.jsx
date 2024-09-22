import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import MatchCardSection from '../Components/MatchCardSection';
import { Input, Select } from "antd";
import Sportsfilter from '../Components/Sportsfilter';
import '../css/Schedule.css';

const { Option } = Select;

const Schedule = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
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
      <Option value="Sport">Sport</Option>
      <Option value="Cricket">Cricket</Option>
      <Option value="Lawn Tennis">Lawn Tennis</Option>
      <Option value="Volleyball">Volleyball</Option>
      <Option value="Basketball">Basketball</Option>
      <Option value="Hockey">Hockey</Option>
    </Select>
  );

  return (
    <div className='min-w-[100vw]'>
      <Navbar />
      <Sportsfilter onSearch={handleSearch} onSportSelect={handleSportSelect} />
      {/* <Timeline onDateSelect={handleDateSelect} /> */}
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
          style={{ width: "100%", maxWidth: "1000px" }}
        />
      </div>
      
      <MatchCardSection 
        searchQuery={searchQuery} 
        selectedSport={selectedSport} 
        selectedDate={selectedDate} 
      />
      <Footer />
    </div>
  );
};

export default Schedule;
