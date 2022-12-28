import React, { useEffect, useState } from "react";
import Movie from "../render/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMoives = async () => {
		const response = await fetch(
			"https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year"
		);
		const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMoives();
	}, []);

	return (
		<div className="container">
			{loading ? (
				<div className="loading">
					<h1 className="loading_text">잠시만 기다려주세요</h1>
				</div>
			) : (
				<div className="movies_container">
					{movies.map((movie) => (
						<Movie
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

export default Home;
