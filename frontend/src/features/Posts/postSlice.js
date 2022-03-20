import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postServices from "./postServices";

const initialState = {
	posts: [],
	post: {},
	isError: false,
	isSuccess: false,
	isLoading: true,
	message: "",
};

//get Posts
export const getPosts = createAsyncThunk("posts/getall", async (_, thunkAPI) => {
	try {
		return await postServices.getPosts();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response);
	}
});
//get Post
export const getPost = createAsyncThunk("posts/getOnePost", async (id, thunkAPI) => {
	try {
		return await postServices.getPost(id);
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response);
	}
});

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPosts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.posts = action.payload;
			})
			.addCase(getPosts.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(getPost.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPost.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.post = action.payload;
			})
			.addCase(getPost.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			});
	},
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
