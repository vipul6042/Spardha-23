
const MatchList = ({ matches }) => {
  const dateToReadable = (date) => {
		const dateString = new Date(date);
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		};
		return dateString.toLocaleDateString(undefined, options);
	};
  return (
    <div>
    <h1>All Games</h1>
    {matches.length === 0 ? (
      <p>No Games</p>
    ) : (
      <table className="gameTable">
        <thead>
          <tr>
            <th>Game Name</th>
            <th>Game Start</th>
            <th>Game Venue</th>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Completed?</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.game_name}</td>
              <td>{dateToReadable(match.game_start)}</td>
              <td>{match.game_venue}</td>
              <td>{match.team1}</td>
              <td>{match.team2}</td>
              <td>{match.is_completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  );
}

export default MatchList;
