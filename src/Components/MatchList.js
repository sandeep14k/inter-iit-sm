import React, { useState, useEffect } from 'react';
import MatchCard from './MatchList';

function MatchList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/matches');
      setMatches(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="match-list">
      {matches.map((match, index) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}

export default MatchList;