import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../contexts/AuthContext";

function DeleteGame() {
  const [gameId, setGameId] = useState('');
  const { token } = useContext(AuthContext);

  const handleGameIdChange = (e) => {
    setGameId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_MICROSERVICE_URL;

      // Send a DELETE request to delete the game by ID
      const response = await axios.delete(`${apiUrl}/api/v1/games/${gameId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      alert(`Game deleted successfully: ${response.data}`);
    } catch (error) {
      alert('Error deleting game');
    }
  };

  return (
    <div>
      <h1>Delete Game by ID</h1>
      <form onSubmit={handleDelete}>
        <div>
          <label htmlFor="gameId">Game ID:</label>
          <input
            type="text"
            id="gameId"
            name="gameId"
            value={gameId}
            onChange={handleGameIdChange}
          />
        </div>
        <button type="submit" className='submitBtn'>Delete Game</button>
      </form>
    </div>
  );
}

export default DeleteGame;
