import React from "react";

import { useStyles } from "./LineChartTwoAxis.elements";
import { IconButton, Button } from "@material-ui/core";

import { AiFillCloseCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

import LinechartTwoAxis from "../../../Visualization/LinechartTwoAxis/LinechartTwoAxis";

import { useSelector, useDispatch } from "react-redux";
import {
	setInfoWidget,
	setLineTwoAxisCategories,
	setLineTwoAxisData,
	setLineTwoAxisTitle,
	setLineTwoAxisYAxis,
	setPortCanLinked,
	setPortIsLinked,
} from "../../../../app/slice/dashboardSlice";
import { OPERATORS, STATISTICS_MERGE } from "../../../../app/ItemTypes";
import {} from "../../../../api";

const WidgetLineChartTwoAxis = ({ id, data, inputs, outputs }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const itemIsSelects = useSelector(
		(state) => state.dashboard.mashupContent.itemIsSelect
	);

	const port = useSelector((state) => state.dashboard.mashupContent.port);

	// [category, data, title, yAxis]
	const dataMerge = [
		useSelector((state) => state.dashboard.viz.merge.categories),
		useSelector((state) => state.dashboard.viz.merge.data),
		useSelector((state) => state.dashboard.viz.merge.title),
		useSelector((state) => state.dashboard.viz.merge.yAxis),
	];

	const handleOnClick = () => {
		let action;

		const idArray = itemIsSelects[0].split("-");
		const dataCube = idArray[0];
		const dataSet = idArray[1];
		const filter = idArray[2];

		let portWidget;
		let portViz = id
			.split("-")
			.filter((item) => item.length > 2)
			.join("-");
		if (filter === undefined) {
			portWidget = `${dataCube}-${dataSet}`;
		} else {
			portWidget = `${dataCube}-${dataSet}-${filter}`;
		}

		const portLinked = [`port-${portWidget}`, `portOut-${portViz}`];

		if (portLinked !== port) {
			action = setPortIsLinked(portLinked);
			dispatch(action);
			action = setPortCanLinked(true);
			dispatch(action);
		}

		if (dataCube === OPERATORS) {
			if (dataSet === STATISTICS_MERGE) {
				// [category, data, title, yAxis]
				// dataMerge
				action = setLineTwoAxisCategories(dataMerge[0]);
				dispatch(action);
				action = setLineTwoAxisData(dataMerge[1]);
				dispatch(action);
				action = setLineTwoAxisTitle(dataMerge[2]);
				dispatch(action);
				action = setLineTwoAxisYAxis(dataMerge[3]);
				dispatch(action);
			}
		}
	};

	const handleQuestionButton = (id) => {
		id = id.split("-")[0];
		const action = setInfoWidget(id);
		dispatch(action);
	};

	return (
		<div className={classes.node}>
			<div className={classes.header}>
				<div className={classes.headerLeft} />
				<div className={classes.headerCenter}>
					<p className={classes.headerTitle}>Line Chart Two Y-Axis</p>
				</div>
				<div className={classes.headerRight}>
					<IconButton
						aria-label="delete"
						size="small"
						color="inherit"
						onClick={() => handleQuestionButton(id)}
					>
						<RiErrorWarningFill />
					</IconButton>
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
				<LinechartTwoAxis />
			</div>
		</div>
	);
};

export default WidgetLineChartTwoAxis;
