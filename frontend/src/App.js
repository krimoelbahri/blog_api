import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/:postId' element={<BlogPost />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
