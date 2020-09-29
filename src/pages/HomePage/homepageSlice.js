import { createSlice } from "@reduxjs/toolkit";

const homepage = createSlice({
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

const { reducer, actions } = homepage;

export const { setDashboardNavbar } = actions;

export default reducer;
