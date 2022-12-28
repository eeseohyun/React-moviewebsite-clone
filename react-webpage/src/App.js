import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Genre from "./routes/Genre";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/page/:genre/:page" element={<Genre />} />
				<Route path="/movie/:id" element={<Detail />} />
			</Routes>
		</Router>
	);
}

export default App;
