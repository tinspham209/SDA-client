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
import {
	CLIMATE_HUMIDITY,
	CLIMATE_RAINFALL,
	CLIMATE_TEMPERATURE,
	INDUSTRY_PRODUCTION,
} from "../../../../app/ItemTypes";
import {
	getHumidityByYear,
	getIndustryByYear,
	getRainfallByYear,
	getTemperatureByYear,
} from "../../../../api";

const WidgetTable = ({ id, data, inputs, outputs }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const itemIsSelect = useSelector(
		(state) => state.dashboard.mashupContent.itemIsSelect
	);

	const handleOnClick = () => {
		console.log("itemIsSelect: ", itemIsSelect);
		let action;
		const portWidget = itemIsSelect.split("-")[0];
		const portViz = id.split("-")[0];
		const portLinked = [`port-${portWidget}`, `port-${portViz}`];
		action = setPortIsLinked(portLinked);
		dispatch(action);
		action = setPortCanLinked(true);
		dispatch(action);

		const dataTable = [];

		if (itemIsSelect.split("-")[0] === CLIMATE_HUMIDITY) {
			if (itemIsSelect.split("-")[1] === "year") {
				const year = itemIsSelect.split("-")[2];

				const fetchAPI = async () => {
					Promise.all([await getHumidityByYear(year)]).then((values) => {
						values[0].results.bindings.map((item) => {
							let itemData = {};
							let city = item.city.value;
							let value = Number(item.value.value).toPrecision();
							itemData = { city, year, value };
							dataTable.push(itemData);
							return null;
						});
						action = setTableData(dataTable);
						dispatch(action);
					});
				};
				fetchAPI();
			}
		} else if (itemIsSelect.split("-")[0] === INDUSTRY_PRODUCTION) {
			if (itemIsSelect.split("-")[1] === "year") {
				const year = itemIsSelect.split("-")[2];

				const fetchAPI = async () => {
					Promise.all([await getIndustryByYear(year)]).then((values) => {
						values[0].results.bindings.map((item) => {
							let itemData = {};
							let city = item.city.value;
							let value = Number(item.value.value).toPrecision();
							itemData = { city, year, value };
							dataTable.push(itemData);
							return null;
						});
						action = setTableData(dataTable);
						dispatch(action);
					});
				};
				fetchAPI();
			}
		} else if (itemIsSelect.split("-")[0] === CLIMATE_TEMPERATURE) {
			if (itemIsSelect.split("-")[1] === "year") {
				const year = itemIsSelect.split("-")[2];

				const fetchAPI = async () => {
					Promise.all([await getTemperatureByYear(year)]).then((values) => {
						values[0].results.bindings.map((item) => {
							let itemData = {};
							let city = item.city.value;
							let value = Number(item.value.value).toPrecision();
							itemData = { city, year, value };
							dataTable.push(itemData);
							return null;
						});
						action = setTableData(dataTable);
						dispatch(action);
					});
				};
				fetchAPI();
			}
		} else if (itemIsSelect.split("-")[0] === CLIMATE_RAINFALL) {
			if (itemIsSelect.split("-")[1] === "year") {
				const year = itemIsSelect.split("-")[2];

				const fetchAPI = async () => {
					Promise.all([await getRainfallByYear(year)]).then((values) => {
						values[0].results.bindings.map((item) => {
							let itemData = {};
							let city = item.city.value;
							let value = Number(item.value.value).toPrecision();
							itemData = { city, year, value };
							dataTable.push(itemData);
							return null;
						});
						action = setTableData(dataTable);
						dispatch(action);
					});
				};
				fetchAPI();
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
