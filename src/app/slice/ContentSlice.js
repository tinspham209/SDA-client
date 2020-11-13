import { createSlice } from "@reduxjs/toolkit";
import { CONTENT } from "../ItemTypes";

const content = createSlice({
	name: CONTENT,
	initialState: {
		itemIsSelect: {},
	},
	reducers: {
		setItemIsSelect: (state, action) => {
			console.log("action.payload", action.payload);
			const itemSelect = action.payload;
			state.itemIsSelect = {
				...state.itemIsSelect,
				itemSelect,
			};
		},
	},
});

const { reducer, actions } = content;

export const { setItemIsSelect } = actions;

export default reducer;
