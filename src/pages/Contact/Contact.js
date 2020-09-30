import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { InfoSection } from "../../components";
import { setDashboardNavbar } from "./contactSlice";
import { homeObjOne, homeObjTwo } from "./Data";
const Contact = () => {
	const dispatch = useDispatch();
	let location = useLocation();

	useEffect(() => {
		if (location.pathname !== "/dashboard") {
			const action = setDashboardNavbar(false);
			dispatch(action);
		}
	}, [location.pathname, dispatch]);
	return (
		<>
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
		</>
	);
};

export default Contact;
