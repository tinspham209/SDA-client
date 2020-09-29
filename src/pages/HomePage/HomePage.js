import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

import { useDispatch } from "react-redux";
import { setDashboardNavbar } from "./homepageSlice";
import { useLocation } from "react-router-dom";

const Home = () => {
	const dispatch = useDispatch();

	let location = useLocation();
	if (location.pathname !== "/dashboard") {
		const action = setDashboardNavbar(false);
		dispatch(action);
	}

	return (
		<>
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
		</>
	);
};

export default Home;
