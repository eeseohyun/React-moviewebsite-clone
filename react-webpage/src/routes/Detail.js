import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../render/MovieDetail";

function Detail() {
	const [movie, setMovie] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const getMoive = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
		);
		const json = await response.json();
		console.log(json);
		setMovie(json.data.movie);
		setLoading(false);
	};

	useEffect(() => {
		getMoive();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>잠시만 기다려주세요</h1>
			) : (
				<div>
					<MovieDetail
						key={movie.id}
						id={movie.id}
						moviePoster={movie.medium_cover_image}
						title={movie.title}
						summary={movie.description_full}
						genres={movie.genres}
						rating={movie.rating}
						runtime={movie.runtime}
					/>
				</div>
			)}
		</div>
	);
}
export default Detail;
