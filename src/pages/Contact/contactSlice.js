import { createSlice } from "@reduxjs/toolkit";

const contact = createSlice({
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

const { reducer, actions } = contact;

export const { setDashboardNavbar } = actions;

export default reducer;
