import React, { useState, useEffect } from "react";
import "../styles/leaderboard.css";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from the server or database
    // eslint-disable-next-line no-use-before-define
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = () => {
    // Fake data store for leaderboard data (replace this with your backend logic)
    const fakeLeaderboardData = [
      { username: "User1", score: 10 },
      { username: "User2", score: 8 },
      { username: "User3", score: 12 },
      { username: "User4", score: 2 },
    ];

    // Sort leaderboard data by score (descending order)
    const sortedData = fakeLeaderboardData.sort((a, b) => b.score - a.score);

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
              <th>Username:</th>
              <th>Score:</th>
            </div>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={index} className="score-data">
              <td>{index + 1}</td>
              <div className="lastusers">
                <td>{user.username}</td>
              </div>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
