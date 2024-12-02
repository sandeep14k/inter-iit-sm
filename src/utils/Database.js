import Match from './Match';
import Athlete from './Athlete';
import axios from 'axios';

export default class Database {

  constructor(role) {
    this.url = 'https://iism24.iitk.ac.in/api';
    this.role = role;
  }

  async getMatches(page, limit, searchQuery, sport, status) {
    if (status == "upcoming") return await this.getScheduledMatches(page, limit, searchQuery, sport);
    if (status == "live") return await this.getLiveMatches(page, limit, searchQuery, sport);
    if (status == "completed") return await this.getCompletedMatches(page, limit, searchQuery, sport);
    else return [];
  }

  async getScheduledMatches(page, limit, searchQuery, sport) {
    let apiUrl;
    if (this.role == "student")
      apiUrl = `${this.url}/matches?page=${page}&limit=${limit}&search=${searchQuery}&sportTableName=${sport.split(" ").join('')}`;
    else
      apiUrl = `${this.url}/getMatchStaff?status=upcoming&page=${page}&limit=${limit}&search=${searchQuery}&sport=${sport}`;

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
    let apiUrl;
    if (this.role == "student")
      apiUrl = `${this.url}/getLiveMatches?page=${page}&limit=${limit}&search=${searchQuery}&sportTableName=${sport.split(" ").join('')}`;
    else
      apiUrl = `${this.url}/getMatchStaff?status=live&page=${page}&limit=${limit}&search=${searchQuery}&sport=${sport}`
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
    let apiUrl;
    if (this.role == "student")
      apiUrl = `${this.url}/getCompletedMatches?page=${page}&limit=${limit}&search=${searchQuery}&sportTableName=${sport.split(" ").join('')}`;
    else
      apiUrl = `${this.url}/getMatchStaff?status=completed&page=${page}&limit=${limit}&search=${searchQuery}&sport=${sport}`
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
    let apiUrl;
    if (this.role != "staff")
      apiUrl = `${this.url}/players?page=${page}&limit=${limit}&search=${searchQuery}&sport=${sport == "Sport" ? "" : sport}&collage=${iit == "IITs" ? "" : iit}`;
    else
      apiUrl = `${this.url}/getMatchStaff?page=${page}&limit=${limit}&search=${searchQuery}&sport=${sport}`
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