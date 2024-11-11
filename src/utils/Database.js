import Match from './Match';
import Athlete from './Athlete';
import axios from 'axios';

export default class Database {

  constructor()
  {
    this.url = 'http://13.53.40.126/api';
  }

  async getMatches(page, limit, searchQuery, sport, status) {
    if(status == "upcoming") return await this.getScheduledMatches(page, limit, searchQuery, sport);
    if(status == "live") return await this.getLiveMatches(page, limit, searchQuery, sport);
    if(status == "completed") return await this.getCompletedMatches(page, limit, searchQuery, sport);
    else return [];
  }
  
  async getScheduledMatches(page, limit, searchQuery, sport) {
    console.log(sport.split(" ").join('').toLowerCase())
    const apiUrl = `${this.url}/matches?page=${page}&limit=${limit}&search=${searchQuery}&sportTableName=${sport.split(" ").join('')}`;

    try {
      const response = await axios.get(apiUrl);
      const data = await response.data.matches || [];

      return data;
    } catch (error) {
      console.error("Error fetching matches:", error.message);
      return [];
    }
  }
  
  async getLiveMatches(page, limit, searchQuery, sport) {
    const apiUrl = `${this.url}/getLiveMatches?page=${page}&limit=${limit}&search=${searchQuery}&sportTableName=${sport.split(" ").join('')}`;

    try {
      const response = await axios.get(apiUrl);
      const data = await response.data.matches || [];
      
      return data;
    } catch (error) {
      console.error("Error fetching matches:", error.message);
      return [];
    }
  }
  
  async getCompletedMatches(page, limit, searchQuery, sport) {
    const apiUrl = `${this.url}/getCompletedMatches?page=${page}&limit=${limit}&search=${searchQuery}&sportTableName=${sport.split(" ").join('')}`;

    try {
      const response = await axios.get(apiUrl);
      const data = await response.data.matches || [];
      
      return data;
    } catch (error) {
      console.error("Error fetching matches:", error.message);
      return [];
    }
  }

  async getPlayers(page, limit, searchQuery, sport, iit) {
    const apiUrl = `${this.url}/players?page=${page}&limit=${limit}&search=${searchQuery}&sport=${sport == "Sport" ? "":sport}&collage=${iit == "IITs" ? "":iit}`;
    
    try {
      const response = await axios.get(apiUrl);
      const data = await response.data.players || [];
      return data;
    } catch (error) {
      console.error("Error fetching matches:", error.message);
      return [];
    }
  }
}