import PropTypes from "prop-types";
import "../MovieDetail.css";

function MovieDetail({
	moviePoster,
	title,
	genres,
	id,
	rating,
	summary,
	runtime,
}) {
	return (
		<div className="movie_list">
			<div className="movie_poster">
				<img src={moviePoster} />
			</div>
			<div className="movie_rating">⭐️ {rating} / 10</div>
			<div className="movie_runtime">{runtime} min</div>
			<div className="movie_contents">
				<h2 className="movie_title" style={{ color: "white" }}>
					{title}
				</h2>
				<p className="movie_summary" style={{ color: "white" }}>
					{summary}
				</p>
				<ul className="movie_genres">
					{genres.map((g) => (
						<li key={g} className="genres_list">
							{g}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

MovieDetail.propTypes = {
	id: PropTypes.number.isRequired,
	moviePoster: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	runtime: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
};
export default MovieDetail;
