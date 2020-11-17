import React from "react";
import { InfoSection, Navbar } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

const Home = () => {
	return (
		<>
			<Navbar />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjThree} />
		</>
	);
};

export default Home;
