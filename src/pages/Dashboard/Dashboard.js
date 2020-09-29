import React from "react";
import { useLocation } from "react-router-dom";
import { InfoSection } from "../../components";
import { homeObjOne } from "./Data";

import { useDispatch } from "react-redux";
import { setDashboardNavbar } from "./dashboardSlice";

const Dashboard = () => {
	const dispatch = useDispatch();

	let location = useLocation();
	if (location.pathname === "/dashboard") {
		const action = setDashboardNavbar(true);
		dispatch(action);
	}

	return (
		<>
			<InfoSection {...homeObjOne} />
		</>
	);
};

export default Dashboard;
