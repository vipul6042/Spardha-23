import {  useContext,useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Fixtures() {
  const [formData, setFormData] = useState({
    game_name: "",
    game_start: "",
    game_venue: "",
    team1: "",
    team2: "",
    is_completed: false,
  });
  const { token } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await fetch(`${apiUrl}/games/`, {
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
    <div>
      <h2>Post Game Information</h2>
      <form onSubmit={handleSubmit} className="fixtureForm">
        <label>
          Game Name:
          <input
            type="text"
            name="game_name"
            value={formData.game_name}
            onChange={handleChange}
            required
          />
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
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Fixtures;
