import React, { useState, useContext } from "react";
// import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import Modal from "react-modal";

const Updatefixtures = ({ isOpen, onRequestClose, gameId }) => {
  const [game, setGame] = useState({
    game_name: "Athletics",
    game_start: "",
    game_venue: "",
    team1: "",
    team2: "",
    is_completed: false,
  });
  const games = [
    "Athletics",
    "Badminton",
    "Basketball",
    "Boxing",
    "Chess",
    "Cricket",
    "Cycling",
    "Football",
    "Handball",
    "Hockey",
    "Kabbadi",
    "Kho-kho",
    "Powerlifting",
    "Squash",
    "Table Tennis",
    "Taekwondo",
    "Tennis",
    "Volleyball",
    "Weight Lifting",
  ];
  const { token } = useContext(AuthContext);

  // const [gameId, setGameId] = useState(""); // Input field for game_id

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  // const handleGameIdChange = (e) => {
  //   setGameId(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_MICROSERVICE_URL;

      const response = await fetch(`${apiUrl}/api/v1/games/${gameId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
      });
      if (response.ok) {
        alert("Game information updated successfully!");
        // Automatically refresh the page
      window.location.reload();
      } else {
        alert("Failed to update game information.");
      }
    } catch (error) {
      alert("Error updating game");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Updare item"
      style={{
        overlay:{},
        content:{
          inset: 'auto',
          marginLeft: '38vw',
          marginTop: '10vh'
        }
      }}
    >
      <h1>Update Game</h1>
      <form onSubmit={handleSubmit} className="fixtureForm">
        {/* <div>
          <label htmlFor="game_id">Game ID:</label>
          <input
            type="text"
            id="game_id"
            name="game_id"
            value={gameId}
            onChange={handleGameIdChange}
            required
          />
        </div> */}
        <label className="label">
          <b>Game Name:</b>
          <select
            value={game.game_name}
            onChange={handleChange}
            required
            name="game_name"
            style={{width:185}}
          >
            {games.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </select>
        </label>
        <label className="label">
          <b>Game Start:</b>
          <input
            type="datetime-local"
            name="game_start"
            value={game.game_start}
            onChange={handleChange}
            required
          />
        </label>
        <label className="label">
        <b>Game Venue:</b>
          <input
            type="text"
            name="game_venue"
            value={game.game_venue}
            onChange={handleChange}
            required
          />
        </label>
        <label className="label">
        <b>Team 1:</b>
          <input
            type="text"
            name="team1"
            value={game.team1}
            onChange={handleChange}
            required
          />
        </label>
        <label className="label">
        <b>Team 2:</b>
          <input
            type="text"
            name="team2"
            value={game.team2}
            onChange={handleChange}
            required
          />
        </label>
        <label className="label"><b>Is Completed:
          <input
            type="checkbox"
            id="is_completed"
            name="is_completed"
            style={{marginLeft:10}}
            checked={game.is_completed}
            onChange={() =>
              setGame({ ...game, is_completed: !game.is_completed })
            }
          /></b></label>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px'
        }}>
        <button className="submitBtn" onClick={onRequestClose}>Cancel</button>
        <button type="submit" className="submitBtn">Update Game</button>
        </div>
      </form>
    </Modal>
  );
};

export default Updatefixtures;
