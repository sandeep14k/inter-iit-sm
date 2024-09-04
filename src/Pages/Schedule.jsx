import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import MatchCardSection from '../Components/MatchCardSection';
import Timeline from '../Components/Timeline';
import Sportsfilter from '../Components/Sportsfilter';
import '../css/Schedule.css';

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

  return (
    <div className='min-w-[100vw]'>
      <Navbar />
      <Sportsfilter onSearch={handleSearch} onSportSelect={handleSportSelect} />
      <Timeline onDateSelect={handleDateSelect} />
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
