import React from "react";
import { useStyles } from "./OutputLog.elements";
const OutputLog = () => {
	const classes = useStyles();
	return (
		<div className={classes.outputLog}>
			<h2>OutputLog</h2>
		</div>
	);
};

export default OutputLog;
