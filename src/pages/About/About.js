import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { InfoSection } from "../../components";
import { setDashboardNavbar } from "./aboutSlice";
import { homeObjOne, mentor1, mentor2, hoa, tins, dong, kieu } from "./Data";
const About = () => {
	const dispatch = useDispatch();

	let location = useLocation();
	if (location.pathname !== "/dashboard") {
		const action = setDashboardNavbar(false);
		dispatch(action);
	}

	return (
		<>
			<InfoSection {...homeObjOne} />
			<InfoSection {...mentor1} />
			<InfoSection {...mentor2} />

			<InfoSection {...hoa} />
			<InfoSection {...tins} />
			<InfoSection {...dong} />
			<InfoSection {...kieu} />
		</>
	);
};

export default About;
