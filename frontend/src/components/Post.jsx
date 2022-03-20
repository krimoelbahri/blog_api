import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Spinner";
import { getPost, reset } from "../features/Posts/postSlice";
import { Container } from "../styles/Post.style";
import { useParams, useNavigate } from "react-router-dom";

function Post() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { postId } = useParams();
	const { post, isLoading, isError, message } = useSelector((state) => state.posts);
	useEffect(() => {
		if (isError) {
			navigate("/404");
		}
		dispatch(getPost(postId));
		return () => {
			dispatch(reset());
		};
	}, [isError, dispatch, message, postId, navigate]);

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<Container>
			<div>{post.title}</div>
			<div>{post.text}</div>
			<div>{post.author.name}</div>
		</Container>
	);
}

export default Post;
