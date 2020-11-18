import React from "react";
import { useStyles } from "./WidgetInfo.elements";
const WidgetInfo = () => {
	const classes = useStyles();
	return (
		<div className={classes.widgetInfo}>
			<h2>WidgetInfo</h2>
		</div>
	);
};

export default WidgetInfo;
