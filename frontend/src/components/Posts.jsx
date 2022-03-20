import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";
import Spinner from "./Spinner";
import { Container } from "../styles/Posts.style";
import { getPosts, reset } from "../features/Posts/postSlice";
import { useNavigate } from "react-router-dom";

function Posts() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { posts, isLoading, isError, message } = useSelector((state) => state.posts);

	useEffect(() => {
		if (isError) {
			navigate("/404");
		}
		dispatch(getPosts());
		return () => {
			dispatch(reset());
		};
	}, [isError, dispatch, message, navigate]);

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<Container>
			{posts.map((post, i) => (
				<PostCard key={`post${i}`} post={post} />
			))}
		</Container>
	);
}

export default Posts;
