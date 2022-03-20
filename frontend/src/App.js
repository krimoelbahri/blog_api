import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/404";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/post/:postId' element={<BlogPost />} />
					<Route path='/404' element={<Error />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
