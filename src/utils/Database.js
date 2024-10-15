import Match from './Match';
import Athlete from './Athlete';
import axios from 'axios';

export default class Database {

  async getMatches(page, limit, searchQuery, date, sport, status) {
    const apiUrl = `http://localhost:3000/api/getMatch?page=${page}&limit=${limit}&search=${searchQuery}${(date) ? `&date=${date.toString()}` : ''}&sport=${sport}&status=${status}`;

    try {
      const response = await axios.get(apiUrl);
      const data = await response.data;
      let matches = [];

      data.matches.forEach(
        (item) => {
          matches.push(new Match(item))
        })
      return matches;
    } catch (error) {
      console.error("Error fetching matches:", error.message);
      return [];
    }
  }

  async getScore(matchID, sport) {
    const apiUrl = `http://localhost:3000/api/getScore?sport=${sport}&matchID=${matchID}`;

    try {
      const response = await axios.get(apiUrl);
      const data = await response.data;
      return data.score;
    } catch (error) {
      console.error("Error fetching matches:", error.message);
    }
  }

  async getPlayers(page, limit, searchQuery, sport, collage) {
    const apiUrl = `http://localhost:3000/api/athletes?page=${page}&limit=${limit}&search=${searchQuery}&sport=${sport}&collage=${collage}`;
    try {

      const response = await axios.get(apiUrl);
      const data = await response.data;

      let athletes = [];

      data.athletes.forEach(
        (item) => {
          athletes.push(new Athlete(item))
        })
      return athletes;
    } catch (error) {
      console.error("Error fetching matches:", error.message);
      return [];
    }
  }
}