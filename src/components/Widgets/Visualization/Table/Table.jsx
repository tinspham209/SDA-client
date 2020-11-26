import React from "react";

import { useStyles } from "./Table.elements";
import { IconButton, Button } from "@material-ui/core";

import { AiFillCloseCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import {
	setInfoWidget,
	setTableData,
	setPortIsLinked,
	setPortCanLinked,
} from "../../../../app/slice/dashboardSlice";

import TableComponent from "../../../Visualization/Table/Table";
import { CLIMATE_HUMIDITY } from "../../../../app/ItemTypes";
import { humidity } from "../../../../api/humidity";

const WidgetTable = ({ id, data, inputs, outputs }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const itemIsSelect = useSelector(
		(state) => state.dashboard.mashupContent.itemIsSelect
	);

	const handleOnClick = () => {
		console.log("itemIsSelect: ", itemIsSelect);
		const portWidget = itemIsSelect[0].split("-")[0];
		const portViz = id.split("-")[0];
		const portLinked = [`port-${portWidget}`, `port-${portViz}`];
		let action = setPortIsLinked(portLinked);
		dispatch(action);
		action = setPortCanLinked(true);
		dispatch(action);

		if (itemIsSelect[0].split("-")[0] === CLIMATE_HUMIDITY) {
			let data = [];
			itemIsSelect.map((item) => {
				const cityIsSelect = item.split("-")[1];
				let yearData = {};
				let year = "";
				let value = "";
				let city = "";
				humidity[cityIsSelect].records.map((record) => {
					city = record.city;
					year = record.year;
					value = record.humidity;
					yearData = { city, year, value };
					data.push(yearData);
					return null;
				});
				return null;
			});
			action = setTableData(data);
			dispatch(action);
		}
		setTimeout(() => {
			action = setPortCanLinked(false);
			dispatch(action);
		}, 1000);
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
					<p className={classes.headerTitle}>Table</p>
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
				<TableComponent />
			</div>
		</div>
	);
};

export default WidgetTable;
