import React from "react";
import { InfoSection, Navbar } from "../../components";
import { homeObjOne, homeObjTwo } from "./Data";
const Contact = () => {
	return (
		<>
			<Navbar />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
		</>
	);
};

export default Contact;
