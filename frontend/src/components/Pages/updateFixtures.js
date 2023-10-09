import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../contexts/AuthContext";

function Updatefixtures() {
  const [game, setGame] = useState({
    game_name: '',
    game_start: '',
    game_venue: '',
    team1: '',
    team2: '',
    is_completed: false,
  });
  const games = [
    'Athletics',
    'Badminton',
    'Basketball',
    'Boxing',
    'Chess',
    'Cricket',
    'Cycling',
    'Football',
    'Handball',
    'Hockey',
    'Kabbadi',
    'Kho-kho',
    'Powerlifting',
    'Squash',
    'Table Tennis',
    'Taekwondo',
    'Tennis',
    'Volleyball',
    'Weight Lifting',
  ];
  const { token } = useContext(AuthContext);

  const [gameId, setGameId] = useState(''); // Input field for game_id

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  const handleGameIdChange = (e) => {
    setGameId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const apiUrl = process.env.REACT_APP_BASE_URL;

      const response = await axios.patch(`${apiUrl}/documents/${gameId}`,{Headers:{Authorization: `Token ${token}`,}}, game);
      alert(`Game updated successfully: ${response.data}`);
    } catch (error) {
      alert('Error updating game');
    }
  };

  return (
    <div>
      <h1>Update Game</h1>
      <form onSubmit={handleSubmit} className='fixtureForm'>
        <div>
          <label htmlFor="game_id">Game ID:</label>
          <input
            type="text"
            id="game_id"
            name="game_id"
            value={gameId}
            onChange={handleGameIdChange}
          />
        </div>
        <div>
          <label htmlFor="game_name">Game Name:</label>
          <select value={game.game_name}onChange={handleChange}required  name="game_name" >
            {games.map((data) =>(
              <option value={data}>{data}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="game_start">Game Start:</label>
          <input
            type="datetime-local"
            id="game_start"
            name="game_start"
            value={game.game_start}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="game_venue">Game Venue:</label>
          <input
            type="text"
            id="game_venue"
            name="game_venue"
            value={game.game_venue}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="team1">Team 1:</label>
          <input
            type="text"
            id="team1"
            name="team1"
            value={game.team1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="team2">Team 2:</label>
          <input
            type="text"
            id="team2"
            name="team2"
            value={game.team2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="is_completed">Is Completed:</label>
          <input
            type="checkbox"
            id="is_completed"
            name="is_completed"
            checked={game.is_completed}
            onChange={() =>
              setGame({ ...game, is_completed: !game.is_completed })
            }
          />
        </div>
        <button type="submit" className='submitBtn'>Update Game</button>
      </form>
    </div>
  );
}

export default Updatefixtures;
