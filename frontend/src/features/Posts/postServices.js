import axios from "axios";

const API_URL = "/api/posts/";

// Get All Posts
const getPosts = async () => {
	const response = await axios.get(API_URL);

	return response.data;
};
// Get one Post
const getPost = async (id) => {
	const response = await axios.get(API_URL + `${id}`);

	return response.data;
};

let postServices = {
	getPosts,
	getPost,
};
export default postServices;
