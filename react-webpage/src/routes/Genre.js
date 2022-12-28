import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieGenre from "../render/MovieGenre";

function Genre() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const { page, genre } = useParams();
	const getMoives = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/list_movies.json?page=${page}&${genre}&sort_by=rating`
		);
		const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
		console.log(movies);
	};

	useEffect(() => {
		console.log(`useEffect`);
		setLoading(true);
		getMoives();
		return;
	}, [page, genre]);
	return (
		<div className="container">
			{loading ? (
				<div className="loading">
					<h1 className="loading_text">잠시만 기다려주세요</h1>
				</div>
			) : (
				<div className="movies_container">
					{movies.map((movie) => (
						<MovieGenre
							key={movie.id}
							id={movie.id}
							moviePoster={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
							year={movie.year}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Genre;
