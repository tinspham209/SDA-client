import React from "react";

import { useStyles } from "./ColumnChart.elements";
import { IconButton, Button } from "@material-ui/core";

import { AiFillCloseCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

import ColumnChart from "../../../Visualization/ColumnChart/ColumnChart";

import { useSelector, useDispatch } from "react-redux";
import {
	setInfoWidget,
	setColumnCategories,
	setColumnData,
	setColumnTitle,
	setPortIsLinked,
	setPortCanLinked,
	setColumnUnit,
} from "../../../../app/slice/dashboardSlice";
import {
	CITY,
	CLIMATE,
	HUMIDITY,
	PERIOD_OF_CITY,
} from "../../../../app/ItemTypes";
import {
	getHumidityByCity,
	getHumidityByPeriodOfCity,
	getIndustryByCity,
	getRainfallByCity,
	getTemperatureByCity,
} from "../../../../api";

const WidgetColumnChart = ({ id, data, inputs, outputs }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const itemIsSelects = useSelector(
		(state) => state.dashboard.mashupContent.itemIsSelect
	);

	const port = useSelector((state) => state.dashboard.mashupContent.port);

	const periodCity = [
		useSelector((state) => state.dashboard.mashupContent.periodOfCity.city),
		useSelector((state) => state.dashboard.mashupContent.periodOfCity.fromYear),
		useSelector((state) => state.dashboard.mashupContent.periodOfCity.toYear),
	];

	const handleOnClick = () => {
		let action;

		const idArray = itemIsSelects[0].split("-");
		const dataCube = idArray[0];
		const dataSet = idArray[1];
		const filter = idArray[2];
		const city = idArray[3];

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

		const portLinked = [`port-${portWidget}`, `port-${portViz}`];

		if (portLinked !== port) {
			action = setPortIsLinked(portLinked);
			dispatch(action);
			action = setPortCanLinked(true);
			dispatch(action);
		}

		let series = [];
		let categories = [];
		let cities = [];

		if (city !== undefined) {
			itemIsSelects.map((item) => cities.push(item.split("-")[3]));
		}
		console.log("cities: ", cities);

		if (dataCube === CLIMATE) {
			if (dataSet === HUMIDITY) {
				if (filter === CITY) {
					const fetchHumidityByCity = async (cities) => {
						const requests = cities.map(async (city) => {
							let object = {};
							let name = "";
							return await getHumidityByCity(city).then((item) => {
								const data = [];
								const category = [];

								item.results.bindings.map((item) => {
									name = item.city.value;
									const year = item.year.value;
									const value = Number(item.value.value);
									category.push(year);
									data.push(value);

									return null;
								});

								object = {
									...object,
									name: name,
									data: data,
								};
								categories = category;
								series = [...series, object];
							});
						});
						return Promise.all(requests);
					};

					fetchHumidityByCity(cities).then(() => {
						action = setColumnCategories(categories);
						dispatch(action);
						action = setColumnData(series);
						dispatch(action);
						action = setColumnTitle("Yearly Humidity");
						dispatch(action);
						action = setColumnUnit("%");
						dispatch(action);
					});
				} else if (filter === PERIOD_OF_CITY) {
					const fetchHumidityByPeriodOfCity = async (cityId, fYear, tYear) => {
						let object = {};
						let name = "";
						return await getHumidityByPeriodOfCity(cityId, fYear, tYear).then(
							(item) => {
								const data = [];
								const category = [];

								item.results.bindings.map((item) => {
									name = item.city.value;
									const year = item.year.value;
									const value = Number(item.value.value);
									category.push(year);
									data.push(value);

									return null;
								});

								object = {
									...object,
									name: name,
									data: data,
								};
								categories = category;
								series = [...series, object];

								return null;
							}
						);
					};
					if (
						periodCity[0] !== "" &&
						periodCity[1] !== "" &&
						periodCity[2] !== ""
					) {
						fetchHumidityByPeriodOfCity(
							periodCity[0],
							periodCity[1],
							periodCity[2]
						).then(() => {
							action = setColumnCategories(categories);
							dispatch(action);
							action = setColumnData(series);
							dispatch(action);
							action = setColumnTitle("Yearly Humidity");
							dispatch(action);
							action = setColumnUnit("%");
							dispatch(action);
						});
					}
				}
			}
		}

		// const portWidget = itemIsSelects[0].split("-")[0];
		// const portViz = id.split("-")[0];
		// const portLinked = [`port-${portWidget}`, `port-${portViz}`];
		// action = setPortIsLinked(portLinked);
		// dispatch(action);
		// action = setPortCanLinked(true);
		// dispatch(action);

		// let series = [];
		// let categories = [];

		// let state = {
		// 	isHumidity: false,
		// 	isTemperature: false,
		// 	isRainfall: false,
		// 	isIndustry: false,
		// 	isCity: false,
		// };

		// let cities = [];

		// itemIsSelects.map((itemIsSelect) => {
		// 	if (itemIsSelect.split("-")[0] === CLIMATE_HUMIDITY) {
		// 		state.isHumidity = true;
		// 		if (itemIsSelect.split("-")[1] === "city") {
		// 			state.isCity = true;
		// 			const citySelect = itemIsSelect.split("-")[2];
		// 			cities.push(citySelect);
		// 		} else {
		// 			state.isCity = false;
		// 			cities = [];
		// 		}
		// 	} else if (itemIsSelect.split("-")[0] === CLIMATE_TEMPERATURE) {
		// 		state.isTemperature = true;
		// 		if (itemIsSelect.split("-")[1] === "city") {
		// 			state.isCity = true;
		// 			const citySelect = itemIsSelect.split("-")[2];
		// 			cities.push(citySelect);
		// 		} else {
		// 			state.isCity = false;
		// 			cities = [];
		// 		}
		// 	} else if (itemIsSelect.split("-")[0] === CLIMATE_RAINFALL) {
		// 		state.isRainfall = true;
		// 		if (itemIsSelect.split("-")[1] === "city") {
		// 			state.isCity = true;
		// 			const citySelect = itemIsSelect.split("-")[2];
		// 			cities.push(citySelect);
		// 		} else {
		// 			state.isCity = false;
		// 			cities = [];
		// 		}
		// 	} else if (itemIsSelect.split("-")[0] === INDUSTRY_PRODUCTION) {
		// 		state.isIndustry = true;
		// 		if (itemIsSelect.split("-")[1] === "city") {
		// 			state.isCity = true;
		// 			const citySelect = itemIsSelect.split("-")[2];
		// 			cities.push(citySelect);
		// 		} else {
		// 			state.isCity = false;
		// 			cities = [];
		// 		}
		// 	}
		// 	return null;
		// });

		// if (state.isHumidity === true && state.isCity === true) {
		// 	const fetchHumidityByCity = async (cities) => {
		// 		const requests = cities.map(async (city) => {
		// 			let object = {};
		// 			let name = "";
		// 			return await getHumidityByCity(city).then((item) => {
		// 				const data = [];
		// 				const category = [];

		// 				item.results.bindings.map((item) => {
		// 					name = item.city.value;
		// 					const year = item.year.value;
		// 					const value = Number(item.value.value);
		// 					category.push(year);
		// 					data.push(value);

		// 					return null;
		// 				});

		// 				object = {
		// 					...object,
		// 					name: name,
		// 					data: data,
		// 				};
		// 				categories = category;
		// 				series = [...series, object];
		// 			});
		// 		});
		// 		return Promise.all(requests);
		// 	};

		// 	fetchHumidityByCity(cities).then(() => {
		// 		action = setColumnCategories(categories);
		// 		dispatch(action);
		// 		action = setColumnData(series);
		// 		dispatch(action);
		// 		action = setColumnTitle("Yearly Humidity");
		// 		dispatch(action);
		// 		action = setColumnUnit("%");
		// 		dispatch(action);
		// 	});
		// } else if (state.isTemperature === true && state.isCity === true) {
		// 	const fetchTemperatureByCity = async (cities) => {
		// 		const requests = cities.map(async (city) => {
		// 			let object = {};
		// 			let name = "";
		// 			return await getTemperatureByCity(city).then((item) => {
		// 				const data = [];
		// 				const category = [];

		// 				item.results.bindings.map((item) => {
		// 					name = item.city.value;
		// 					const year = item.year.value;
		// 					const value = Number(item.value.value);
		// 					category.push(year);
		// 					data.push(value);

		// 					return null;
		// 				});

		// 				object = {
		// 					...object,
		// 					name: name,
		// 					data: data,
		// 				};
		// 				categories = category;
		// 				series = [...series, object];
		// 			});
		// 		});
		// 		return Promise.all(requests);
		// 	};

		// 	fetchTemperatureByCity(cities).then(() => {
		// 		action = setColumnCategories(categories);
		// 		dispatch(action);
		// 		action = setColumnData(series);
		// 		dispatch(action);
		// 		action = setColumnTitle("Yearly Temperature");
		// 		dispatch(action);
		// 		action = setColumnUnit("°C");
		// 		dispatch(action);
		// 	});
		// } else if (state.isRainfall === true && state.isCity === true) {
		// 	const fetchRainfallByCity = async (cities) => {
		// 		const requests = cities.map(async (city) => {
		// 			let object = {};
		// 			let name = "";
		// 			return await getRainfallByCity(city).then((item) => {
		// 				const data = [];
		// 				const category = [];

		// 				item.results.bindings.map((item) => {
		// 					name = item.city.value;
		// 					const year = item.year.value;
		// 					const value = Number(item.value.value);
		// 					category.push(year);
		// 					data.push(value);

		// 					return null;
		// 				});

		// 				object = {
		// 					...object,
		// 					name: name,
		// 					data: data,
		// 				};
		// 				categories = category;
		// 				series = [...series, object];
		// 			});
		// 		});
		// 		return Promise.all(requests);
		// 	};

		// 	fetchRainfallByCity(cities).then(() => {
		// 		action = setColumnCategories(categories);
		// 		dispatch(action);
		// 		action = setColumnData(series);
		// 		dispatch(action);
		// 		action = setColumnTitle("Yearly Rainfall");
		// 		dispatch(action);
		// 		action = setColumnUnit("mm");
		// 		dispatch(action);
		// 	});
		// } else if (state.isIndustry === true && state.isCity === true) {
		// 	const fetchIndustryByCity = async (cities) => {
		// 		const requests = cities.map(async (city) => {
		// 			let object = {};
		// 			let name = "";
		// 			return await getIndustryByCity(city).then((item) => {
		// 				const data = [];
		// 				const category = [];

		// 				item.results.bindings.map((item) => {
		// 					name = item.city.value;
		// 					const year = item.year.value;
		// 					const value = Number(item.value.value);
		// 					category.push(year);
		// 					data.push(value);

		// 					return null;
		// 				});

		// 				object = {
		// 					...object,
		// 					name: name,
		// 					data: data,
		// 				};
		// 				categories = category;
		// 				series = [...series, object];
		// 			});
		// 		});
		// 		return Promise.all(requests);
		// 	};

		// 	fetchIndustryByCity(cities).then(() => {
		// 		action = setColumnCategories(categories);
		// 		dispatch(action);
		// 		action = setColumnData(series);
		// 		dispatch(action);
		// 		action = setColumnTitle("Yearly Industry");
		// 		dispatch(action);
		// 		action = setColumnUnit("Industrial Index (IPI)");
		// 		dispatch(action);
		// 	});
		// }
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
					<p className={classes.headerTitle}>Column Chart</p>
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
				<ColumnChart />
			</div>
		</div>
	);
};

export default WidgetColumnChart;
