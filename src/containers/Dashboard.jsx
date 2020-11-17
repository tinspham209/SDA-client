import React from "react";

import { useStyles } from "./Dashboard.elements";

import { Toolbar } from "../components";
import MashupContent from "./MashupContent/MashupContent";
import OutputLog from "./OutputLog/OutputLog";

import { listItems } from "../data";

const DashboardContainer = () => {
	const classes = useStyles();
	return (
		<div className={classes.dashboard}>
			<Toolbar listItems={listItems} />
			<MashupContent />
			<OutputLog />
		</div>
	);
};

export default DashboardContainer;
