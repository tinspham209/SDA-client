import { createSlice } from "@reduxjs/toolkit";

const dashboard = createSlice({
	name: "dashboard",
	initialState: {
		isDashboard: false,
	},
	reducers: {
		setDashboardNavbar: (state, action) => {
			state.isDashboard = action.payload;
		},
	},
});

const { reducer, actions } = dashboard;

export const { setDashboardNavbar } = actions;

export default reducer;
