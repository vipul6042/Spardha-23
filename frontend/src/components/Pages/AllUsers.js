import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./table.css";

function AllUsers() {
	const baseUrl = process.env.REACT_APP_BASE_URL;
	const [users, setUsers] = useState([]);
	const { token } = useContext(AuthContext);
	const formatText = (str) => {
		const words = str.split("_");
		const capitalizedWords = words.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1)
		);
		const result = capitalizedWords.join(" ");
		return result;
	};

	useEffect(() => {
		axios
			.get(`${baseUrl}/auth/all`, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => console.error(err));
	}, [baseUrl, token]);
	return (
		<div>
			<h1>All Users</h1>
			{users.length === 0 ? (
				<p>No Users</p>
			) : (
				<table className="table">
					<thead>
						<tr>
							{Object.keys(users[0]).map((key) => (
								<th key={key}>{formatText(key)}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={index}>
								{Object.keys(user).map((key) => (
									<td key={key + user[key]}>{user[key]}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default AllUsers;
