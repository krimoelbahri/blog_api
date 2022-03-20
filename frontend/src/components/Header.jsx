import { Container } from "../styles/Header.style";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<Container>
			<Link to={"/"}>
				<div>Elbahri BLOG</div>
			</Link>
		</Container>
	);
}
