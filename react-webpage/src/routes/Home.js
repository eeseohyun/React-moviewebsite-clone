import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMoives = async () => {
		const response = await fetch(
			"https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
		);
		const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMoives();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>잠시만 기다려주세요</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							moviePoster={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
