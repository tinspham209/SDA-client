import React from "react";
import { useStyles } from "./MashupContent.elements";
const MashupContent = () => {
	const classes = useStyles();
	return (
		<div className={classes.mashupContent}>
			<h2>Content</h2>
		</div>
	);
};

export default MashupContent;
