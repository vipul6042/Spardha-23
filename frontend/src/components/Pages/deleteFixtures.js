import React, { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import Modal from "react-modal";

// Modal.setAppElement("#root");

const DeleteGame = ({ isOpen, onRequestClose, gameId }) => {
  // const [gameId, setGameId] = useState("");
  const { token } = useContext(AuthContext);

  // const handleGameIdChange = (e) => {
  //   setGameId(e.target.value);
  // };

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
      // Automatically refresh the page
      window.location.reload();
    } catch (error) {
      alert("Error deleting game");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation"
      style={{
        overlay:{},
        content:{
          inset: 'auto',
          marginLeft: '35vw',
          marginTop: '30vh'
        }
      }}
    >
      <h1 style={{textAlign:'center'}}>Delete Fixture</h1>
      {/* <form onSubmit={handleDelete}>
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
        <button type="submit" className="submitBtn">
          Delete Game
        </button>
      </form> */}
      <p>Are you sure you want to delete this item?</p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        justifyContent: 'center'
      }}>
      <button onClick={handleDelete} className="submitBtn">Delete</button>
      <button onClick={onRequestClose} className="submitBtn">Cancel</button>
      </div>
    </Modal>
  );
};

export default DeleteGame;
