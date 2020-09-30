import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { InfoSection } from "../../components";
import { setDashboardNavbar } from "./aboutSlice";
import { homeObjOne, mentor1, mentor2, hoa, tins, dong, kieu } from "./Data";
const About = () => {
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
