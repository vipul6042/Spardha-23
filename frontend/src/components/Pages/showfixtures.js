import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteGame from "./deleteFixtures";
import Updatefixtures from "./updateFixtures";
import AddFixtures from "./Fixtures";

const Fixtures = ({ selectedSport, selectedDate }) => {
  const [matchData, setMatchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isUpdateOpen, setUpdateOpen] = useState(false);
  const [isAddOpen, setAddOpen] = useState(false);
  const openDelete = () => {
    setDeleteOpen(true);
  };

  const closeDelete = () => {
    setDeleteOpen(false);
  };
  const openUpdate = () => {
    setUpdateOpen(true);
  };

  const closeUpdate = () => {
    setUpdateOpen(false);
  };
  const openAdd = () => {
    setAddOpen(true);
  };

  const closeAdd = () => {
    setAddOpen(false);
  };

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
      <div>
        <button 
          onClick={openAdd}   
            style={{
              backgroundColor: 'cornflowerblue',
              borderRadius: '9px',
              color: 'white', // You might want to set the text color
              padding: '15px', // Add some padding for a better visual appearance
              margin: '5px'
            }}
        >Add</button>
        <AddFixtures isOpen={isAddOpen} onRequestClose={closeAdd} />
      </div>
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
              <th>actions</th>
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
                  <td>{data.game_start.slice(0, 10)}</td>
                  <td>{data.game_start.slice(11, 16)}</td>
                  <td>{data.game_venue}</td>
                  <td>{data.team1}</td>
                  <td>{data.team2}</td>
                  <td style={{gap:'10px',display:'flex'}}>
                    <button 
                      onClick={openDelete}
                      style={{
                        backgroundColor: 'red',
                        borderRadius: '9px',
                        color: 'white', // You might want to set the text color
                        padding: '15px', // Add some padding for a better visual appearance
                        }}>Delete</button>
                    <button 
                      onClick={openUpdate}
                      style={{
                        backgroundColor: 'green',
                        borderRadius: '9px',
                        color: 'white', // You might want to set the text color
                        padding: '15px', // Add some padding for a better visual appearance
                      }}>Edit</button>
                  </td>
                  <DeleteGame
                    isOpen={isDeleteOpen}
                    onRequestClose={closeDelete}
                    gameId={data._id}
                  />
                  <Updatefixtures
                    isOpen={isUpdateOpen}
                    onRequestClose={closeUpdate}
                    gameId={data._id}
                  />
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Fixtures;
