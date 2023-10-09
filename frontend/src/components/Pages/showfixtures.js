import React, { useEffect, useState } from "react";
import axios from "axios";
// import './ResultFixture.css';
// import cricket_img from '../Events/image/crickethover.png';
// import badminton_img from '../Events/image/badmintonhover.png';
const Fixtures = ({ selectedSport, selectedDate }) => {
  const [matchData, setMatchData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MICROSERVICE_URL;
    axios
      .get(`${apiUrl}/api/v1/games/`)
      .then((response) => {
        // console.log(response.data)
        setMatchData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  //     const filterMatches =
  //     selectedSport === 'All'
  //       ? matchData
  //       : matchData.filter((match) => match.game_name === selectedSport);

  //   const filteredMatches =
  //     selectedDate === 'All'
  //       ? filterMatches
  //       : filterMatches.filter((match) => match.game_start.slice(0,10) === selectedDate);
  const filteredMatches = matchData;
  return (
    <div className="Supreme">
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Game ID</th>
              <th>Game Name</th>
              <th>Game Date</th>
              <th>Game Time</th>
              <th>Game Venue</th>
              <th>Game Team1</th>
              <th>Game Team2</th>
            </tr>
          </thead>
          <tbody>
            {filteredMatches
              .slice() 
              .sort((a, b) => a.game_name.localeCompare(b.game_name))
              .map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data._id}</td>
                  <td>{data.game_name}</td>
                  <td>{data.game_start.slice(0,10)}</td>
                  <td>{data.game_start.slice(11,16)}</td>
                  <td>{data.game_venue}</td>
                  <td>{data.team1}</td>
                  <td>{data.team2}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Fixtures;
