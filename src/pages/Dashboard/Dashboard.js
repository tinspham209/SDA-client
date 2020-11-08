import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setDashboardNavbar } from "../../app/slice/dashboardSlice";

import DashboardComponent from "../../components/Dashboard/Dashboard";

const Dashboard = () => {
	const dispatch = useDispatch();

	let location = useLocation();
	if (location.pathname === "/dashboard") {
		const action = setDashboardNavbar(true);
		dispatch(action);
	}

	return <DashboardComponent />;
};

export default Dashboard;
