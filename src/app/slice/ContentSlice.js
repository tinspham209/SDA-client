import { createSlice } from "@reduxjs/toolkit";
import { CONTENT } from "../ItemTypes";

const content = createSlice({
	name: CONTENT,
	initialState: {
		itemIsSelect: [],
		humidity: {
			categories: [],
			series: [],
		},
	},
	reducers: {
		setItemIsSelect: (state, action) => {
			state.itemIsSelect = action.payload;
		},
		fetchDataHumidity: (state, action) => {
			console.log("action.payload", action.payload);
		},
	},
});

const { reducer, actions } = content;

export const { setItemIsSelect, fetchDataHumidity } = actions;

export default reducer;
