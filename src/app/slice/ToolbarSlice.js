import { createSlice } from "@reduxjs/toolkit";
import { TOOLBAR } from "../ItemTypes";
const toolbar = createSlice({
	name: TOOLBAR,
	initialState: {
		isOpen: {
			climate: false,
			atmosphere: false,
			population: false,
			industry: false,
			forest: false,
			operators: false,
			visualization: true,
		},
		isDragItem: "",
	},
	reducers: {
		setDashboardNavbar: (state, action) => {
			state.isDashboard = action.payload;
		},

		setIsOpen: (state, action) => {
			state.isOpen[action.payload] = !state.isOpen[action.payload];
		},
		setIsDragItem: (state, action) => {
			state.isDragItem = action.payload;
		},
	},
});

const { reducer, actions } = toolbar;

export const { setDashboardNavbar, setIsOpen, setIsDragItem } = actions;

export default reducer;
