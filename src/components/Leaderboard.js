import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import "../styles/leaderboard.css";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from the server or database
    // eslint-disable-next-line no-use-before-define
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const responseData = [];
    // For each user, push an object to our responseData array
    querySnapshot.forEach((user) => {
      responseData.push({
        username: user.data().username,
        score: user.data().total_score,
        percentage: user.data().average_percentage,
      });
    });
    // Sort responseData by percentage (descending order)
    const sortedData = responseData.sort((a, b) => b.percentage - a.percentage);
    // Update the state with the sorted leaderboard data
    setLeaderboardData(sortedData);
  };

  return (
    <div className="leaderboard">
      <h1 className="heading">Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <div className="leaderboard-header">
              <th>Rank:</th>
              <th>User:</th>
              <th>Total Score:</th>
              <th>Average Percentage:</th>
            </div>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={index} className="score-data">
              <td className="rank">{index + 1}</td>
              <td className="username">{user.username}</td>
              <td className="score">{user.score}</td>
              <td className="percentage">{Math.round(user.percentage)}%</td>
            </tr>
          ))}
          {/* <tr>
            <div className="leaderboard-header">
              <td>Rank:</td>
              <td>User:</td>
              <td>Total Score:</td>
              <td>Average Percentage:</td>
            </div>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
