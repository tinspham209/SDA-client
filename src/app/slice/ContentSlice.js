import { createSlice } from "@reduxjs/toolkit";
import { CONTENT } from "../ItemTypes";

const content = createSlice({
	name: CONTENT,
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
