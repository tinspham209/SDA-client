import { createSlice } from "@reduxjs/toolkit";

const toolbar = createSlice({
	name: "toolbar",
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
	},
	reducers: {
		setDashboardNavbar: (state, action) => {
			state.isDashboard = action.payload;
		},

		setIsOpen: (state, action) => {
			state.isOpen[action.payload] = !state.isOpen[action.payload];
		},
	},
});

const { reducer, actions } = toolbar;

export const { setDashboardNavbar, setIsOpen } = actions;

export default reducer;
