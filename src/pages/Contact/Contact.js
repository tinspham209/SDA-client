import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { InfoSection } from "../../components";
import { setDashboardNavbar } from "./contactSlice";
import { homeObjOne, homeObjTwo } from "./Data";
const Contact = () => {
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
		</>
	);
};

export default Contact;
