import React, { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import "../styles/leaderboard.css";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const fetchLeaderboardData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const responseData = [];
    querySnapshot.forEach((user) => {
      responseData.push({
        username: user.data().username,
        score: user.data().total_score,
        percentage: user.data().average_percentage,
      });
    });

    const sortedData = responseData.sort((a, b) => b.percentage - a.percentage);
    setLeaderboardData(sortedData);
  };

  fetchLeaderboardData();

  return (
    <table className="leaderboard">
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Total Score</th>
          <th>Average %</th>
        </tr>
      </thead>
      <tbody>
        {leaderboardData.map((user, index) => (
          <tr className="score-data">
            <td className="rank">{index + 1}</td>
            <td className="username">{user.username}</td>
            <td className="score">{user.score}</td>
            <td className="percentage">{Math.round(user.percentage)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;
