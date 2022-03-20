import { Container } from "../styles/PostCard.style";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../features/Posts/postSlice";

function PostCard({ post }) {
	const dispatch = useDispatch();
	let date = new Date(post.createdAt);
	return (
		<Link
			to={`/post/${post._id}`}
			onClick={() => {
				dispatch(reset());
			}}
		>
			<Container>
				<img src='' alt='Post_Pic' />
				<div>{post.title}</div>
				<div>{post.author.name}</div>
				<div>{date.toDateString()}</div>
			</Container>
		</Link>
	);
}

export default PostCard;
