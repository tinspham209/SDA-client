import React from "react";

import { useStyles } from "./Dashboard.elements";

import { Toolbar } from "../components";
import MashupContent from "./MashupContent/MashupContent";

import { listItems } from "../data";

const DashboardContainer = () => {
	const classes = useStyles();
	return (
		<div className={classes.dashboard}>
			<Toolbar listItems={listItems} />
			<MashupContent />
		</div>
	);
};

export default DashboardContainer;
