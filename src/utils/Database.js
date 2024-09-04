import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export default class Database {
  constructor(){
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

  async getPlayers(from=0, limit=0) {
    const playersCol = collection(this.db, 'players');
    const playerSnapshot = await getDocs(playersCol);
    const playerList = await playerSnapshot.docs.map(doc => doc.data());
    return playerList;
  }
}