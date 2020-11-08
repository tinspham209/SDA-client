import { createSlice } from "@reduxjs/toolkit";

const content = createSlice({
	name: "content",
	initialState: {
		nodes: [],
	},
	reducers: {
		addNode: (state, action) => {
			console.log("action.payload", action.payload);
		},
	},
});

const { reducer, actions } = content;

export const { addNode } = actions;

export default reducer;
