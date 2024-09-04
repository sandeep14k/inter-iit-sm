import React, { useState, useEffect, useRef } from 'react';
import '../css/Schedule.css';
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqmA0sOYXtlX5ycSZ9OB-LOYZXavMcX-U",
  authDomain: "iism2024.firebaseapp.com",
  projectId: "iism2024",
  storageBucket: "iism2024.appspot.com",
  messagingSenderId: "46658532627",
  appId: "1:46658532627:web:11ba08ee9f1def9959d6e6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PageSize = 10;

const MatchCardSection = ({ searchQuery, selectedSport, selectedDate }) => {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const lastDocRef = useRef(null);

  console.log("MatchCardSection Component Props:");
  console.log("searchQuery:", searchQuery);
  console.log("selectedSport:", selectedSport);
  console.log("selectedDate:", selectedDate);

  const fetchMatches = async (isInitial = false) => {
    if (isLoading) return;
    setIsLoading(true);

    let q = query(collection(db, "schedule"), orderBy("Date"), limit(PageSize));
    console.log("Initial query:", q);

    if (selectedSport) {
      q = query(q, where("Sport", "==", selectedSport));
      console.log("Query after applying selectedSport:", q);
    }

    if (selectedDate) {
      q = query(q, where("Date", "==", selectedDate));
      console.log("Query after applying selectedDate:", q);
    }

    if (searchQuery) {
      q = query(
        q,
        where("Team1", ">=", searchQuery),
        where("Team1", "<=", searchQuery + '\uf8ff')
      );
      console.log("Query after applying searchQuery:", q);
    }

    if (!isInitial && lastDocRef.current) {
      q = query(q, startAfter(lastDocRef.current));
      console.log("Query after applying pagination:", q);
    }

    try {
      const snapshot = await getDocs(q);
      const matchesList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      console.log("Fetched matches:", matchesList);

      if (matchesList.length > 0) {
        setMatches(isInitial ? matchesList : prevMatches => [...prevMatches, ...matchesList]);
        lastDocRef.current = snapshot.docs[snapshot.docs.length - 1];
        console.log("New lastDocRef:", lastDocRef.current);
      } else if (isInitial) {
        setMatches([]);
      }
    } catch (error) {
      console.error("Error fetching matches:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching matches with new filters");
    fetchMatches(true);
  }, [searchQuery, selectedSport, selectedDate]);

  const handleNextPage = () => {
    if (!isLoading) {
      fetchMatches();
    }
  };

    return (
        <div className='cardbox'>
            {matches.length > 0 ? (
                matches.map((match, index) => (
                    <div className="match-card">
                            <div className='details'>
                            <h3>Match {index+1}</h3>
                            <p className='dete-font'>Pool A</p>
                            <div className='time'>
                                <p className='dete-font'>Time:{match.Time}</p>
                                <p className='dete-font'>Venue:{match.Venue}</p>
                            </div>
                        </div>
                        {/* <div className='box'>
                            <div className='logos'>
                                <img className='iitlogo' src="" alt="" />
                                <br />
                                <p>{match.Team1}</p>
                            </div>
                            <div className='versus'>
                            <img className='iitlogo' src="" alt="" /> <br /><p>{match.Team2}</p>
                            </div>
                        </div> */}
                    </div>
                ))
            ) : (
                <p>No matches found.</p>
            )}
            <br />
            
            <button className='button load' onClick={handleNextPage} disabled={isLoading}>
                {isLoading ? "Loading..." : "Load More"}
            </button>
            <br />
            <br />
        </div>
    );
};

export default MatchCardSection;
