import { useSelector } from "react-redux";
import Header from "../components/Header";

function Error() {
	const { message } = useSelector((state) => state.posts);
	console.log(message);
	return (
		<>
			<Header />
			<div>{message ? message.data.message : "Something went wrong"}</div>
		</>
	);
}

export default Error;
