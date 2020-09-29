import { createSlice } from "@reduxjs/toolkit";

const about = createSlice({
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

const { reducer, actions } = about;

export const { setDashboardNavbar } = actions;

export default reducer;
