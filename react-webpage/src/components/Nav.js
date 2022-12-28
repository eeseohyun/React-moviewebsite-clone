import { useState } from "react";
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "./NavObj";
import "../Nav.css";

function Nav() {
	const [search, setSearch] = useState("");
	const searchClick = (event) => {
		setSearch(event.target.value);
	};
	return (
		<div className="nav_container">
			<div className="pagename">
				<Link to={"/"} style={{ textDecoration: "none", color: "#4dd6d3" }}>
					MovieStudio
				</Link>
			</div>
			<div className="grouppage">
				{Group_key_arr.map((key) => {
					return (
						<div className="link" key={key}>
							<div className="link_separate">
								<Link
									to={`/page/${Group_obj[key]}/1`}
									style={{ textDecoration: "none", color: "#4dd6d3" }}
								>
									{key}
								</Link>
							</div>
						</div>
					);
				})}
			</div>
			<div className="searchbar">
				<div>
					<form>
						<input
							type="text"
							placeholder="search"
							value={search}
							onChange={searchClick}
							onMouseOut={() => {
								setSearch("");
							}}
						></input>
						<Link to={`/search/${search}`}>
							<button>🔍</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Nav;
