import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../Movie.css";

function MovieGenre({ moviePoster, title, genres, id, year }) {
	return (
		<div className="movies_list">
			<div className="movies_poster">
				<img src={moviePoster} />
				<div className="movies_more">
					<Link
						to={`/movie/${id}`}
						style={{
							textDecoration: "none",
							color: "white",
							backgroundColor: "#b1b1b1",
							padding: "6px",
							borderRadius: "10px",
						}}
					>
						more
					</Link>
				</div>
			</div>
			<div className="movies_contents">
				<h2 className="movies_title">{title}</h2>
				<h4 className="movies_release">{year}</h4>
				<ul className="movies_genres">
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

MovieGenre.propTypes = {
	id: PropTypes.number.isRequired,
	moviePoster: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieGenre;
