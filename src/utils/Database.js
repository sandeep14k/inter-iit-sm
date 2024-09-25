import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Match from './Match';
import axios from 'axios';

export default class Database {
  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyCqmA0sOYXtlX5ycSZ9OB-LOYZXavMcX-U",
      authDomain: "iism2024.firebaseapp.com",
      projectId: "iism2024",
      storageBucket: "iism2024.appspot.com",
      messagingSenderId: "46658532627",
      appId: "1:46658532627:web:11ba08ee9f1def9959d6e6"
    };

    this.app = initializeApp(this.firebaseConfig);
    this.db = getFirestore(this.app);
  }

  async getMatches(page, limit, searchQuery, date, sport, status) {
    // const apiUrl = `http://localhost:3000/api/matches?page=${page}&limit=${limit}&sortBy=time&search=${searchQuery}${(date) ? `&date=${date.toString()}`:''}${(sport != "Sport") ? `&sport=${sport}`:''}`;
    const apiUrl = `http://localhost:3000/api/getMatch?page=${page}&limit=${limit}&search=${searchQuery}${(date) ? `&date=${date.toString()}` : ''}&sport=${sport}&status=${status}`;

    try {
      const response = await axios.get(apiUrl);
      const data = await response.data;
      console.log(data)
      let matches = [];

      data.matches.forEach(
        (item) => {
          matches.push(new Match(item))
        })
      return matches;
    } catch (error) {
      console.error("Error fetching matches:", error);
      console.log(error);
    }
  }

  async getPlayers(from = 0, limit = 0) {
    const playersCol = collection(this.db, 'players');
    const playerSnapshot = await getDocs(playersCol);
    const playerList = await playerSnapshot.docs.map(doc => doc.data());
    return playerList;
  }
}