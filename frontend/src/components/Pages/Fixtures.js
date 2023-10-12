import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Modal from "react-modal";

const AddFixtures = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_MICROSERVICE_URL;

    try {
      const response = await fetch(`${apiUrl}/api/v1/games/`, {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Game information posted successfully!");
        setFormData({
          game_name: "",
          game_start: "",
          game_venue: "",
          team1: "",
          team2: "",
          is_completed: false,
        });

        // Automatically refresh the page
      window.location.reload();

      } else {
        alert("Failed to post game information.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          marginTop: '12vh'
        }
      }}
    >      <h1>Post Game Information</h1>
      <form onSubmit={handleSubmit} className="fixtureForm">
        <label>
          Game Name:
          <select
            value={formData.game_name}
            onChange={handleChange}
            required
            name="game_name"
          >
            {games.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </select>
        </label>
        <label>
          Game Start:
          <input
            type="datetime-local"
            name="game_start"
            value={formData.game_start}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Game Venue:
          <input
            type="text"
            name="game_venue"
            value={formData.game_venue}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Team 1:
          <input
            type="text"
            name="team1"
            value={formData.team1}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Team 2:
          <input
            type="text"
            name="team2"
            value={formData.team2}
            onChange={handleChange}
            required
          />
        </label>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px'
        }}>
        <button onClick={onRequestClose} className="submitBtn">Cancel</button>
        <button type="submit" className="submitBtn">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddFixtures;
