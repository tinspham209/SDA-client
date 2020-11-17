import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setDashboardNavbar } from "../../app/slice/dashboardSlice";

const Dashboard = () => {
	const dispatch = useDispatch();

	let location = useLocation();
	if (location.pathname === "/dashboard") {
		const action = setDashboardNavbar(true);
		dispatch(action);
	}

	return (
		<div className="">
			<h2>dashboard</h2>
		</div>
	);
};

export default Dashboard;
