import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	const [details, setDetails] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const getMoive = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setDetails(json.data.movie);
		setLoading(false);
		console.log(json);
	};

	useEffect(() => {
		getMoive();
	}, []);

	return;
}

export default Detail;
