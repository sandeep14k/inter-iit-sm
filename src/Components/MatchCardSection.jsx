import React, { useState, useEffect, useRef } from 'react';
import '../css/Schedule.css';
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, limit, startAfter, getDocs,
    query,
    orderBy
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

const PageSize = 10; // Number of items per page

const PaginationExample = () => {
    const [matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const lastDocRef = useRef(null);
    const [hasFetchedInitial, setHasFetchedInitial] = useState(false);

    const fetchMatches = async (isInitial = false) => {
        if (isLoading) return; // Prevent duplicate fetches
        setIsLoading(true);

        let q;
        if (isInitial || !lastDocRef.current) {
            q = query(
                collection(db, "schedule"),
                orderBy("Date"),
                limit(PageSize)
            );
        } else {
            q = query(
                collection(db, "schedule"),
                orderBy("Date"),
                startAfter(lastDocRef.current),
                limit(PageSize)
            );
        }

        try {
            const snapshot = await getDocs(q);
            const matchesList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            console.log("Fetched matches:", matchesList);
            console.log("Last document:", snapshot.docs[snapshot.docs.length - 1]);

            if (matchesList.length > 0) {
                setMatches(prevMatches => [...prevMatches, ...matchesList]);
                lastDocRef.current = snapshot.docs[snapshot.docs.length - 1];
            }

            if (isInitial) {
                setHasFetchedInitial(true);
            }
        } catch (error) {
            console.error("Error fetching matches:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        console.log("Component mounted, triggering initial fetch...");
        fetchMatches(true); // Trigger the initial fetch
    }, []);

    const handleNextPage = () => {
        if (!isLoading && hasFetchedInitial) {
            fetchMatches(); // Fetch next page only if initial fetch is done
        }
    };

    return (
        <div>
            {matches.length > 0 ? (
                matches.map((match, index) => (
                    <div key={match.id} className="match-card">
                        <h3>Match {index + 1}</h3>
                        <p>Sport {match.Sport}</p>
                        <p>{match.Team1} vs {match.Team2}</p>
                        <p>Time: {match.Time}</p>
                        <p>Venue: {match.Venue}</p>
                    </div>
                ))
            ) : (
                <p>No matches found.</p>
            )}
            <button onClick={handleNextPage} disabled={isLoading}>
                {isLoading ? "Loading..." : "Load More"}
            </button>
        </div>
    );
};

export default PaginationExample;
