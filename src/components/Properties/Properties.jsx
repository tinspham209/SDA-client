import React from "react";
import { useStyles } from "./Properties.elements";
const Properties = () => {
	const classes = useStyles();
	return (
		<div className={classes.properties}>
			<h2>Properties</h2>
		</div>
	);
};

export default Properties;
