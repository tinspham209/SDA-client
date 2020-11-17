import React from "react";

import { useStyles } from "./LineChart.elements";
import { IconButton, Button } from "@material-ui/core";

import { AiFillCloseCircle } from "react-icons/ai";
import LineChart from "../../../Visualization/Linechart/LineChart";

const WidgetLineChart = ({ id, data, inputs, outputs }) => {
	const classes = useStyles();
	const handleOnClick = () => {
		console.log("LineChartBtn onClick");
	};
	return (
		<div className={classes.node}>
			<div className={classes.header}>
				<div className={classes.headerLeft} />
				<div className={classes.headerCenter}>
					<p className={classes.headerTitle}>Line Chart</p>
				</div>
				<div className={classes.headerRight}>
					<IconButton
						aria-label="delete"
						size="small"
						color="inherit"
						onClick={() => data.onClick(id)}
					>
						<AiFillCloseCircle />
					</IconButton>
				</div>
			</div>
			<div className={classes.button}>
				<Button
					size="small"
					variant="contained"
					color="primary"
					onClick={() => handleOnClick()}
				>
					Run
				</Button>
			</div>
			<div className={classes.body}>
				<div className={classes.portIn}>
					{inputs.map((port) =>
						React.cloneElement(port, {
							style: {
								width: "15px",
								height: "15px",
								background: "#1B263B",
								borderRadius: "50%",
							},
						})
					)}
				</div>
				<LineChart />
			</div>
		</div>
	);
};

export default WidgetLineChart;
