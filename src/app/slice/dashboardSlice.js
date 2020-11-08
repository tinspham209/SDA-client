import { createSlice } from "@reduxjs/toolkit";
import { DASHBOARD } from "../ItemTypes";

const dashboard = createSlice({
	name: DASHBOARD,
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
