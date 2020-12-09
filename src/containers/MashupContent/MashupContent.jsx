import React, { useEffect } from "react";
import { useStyles } from "./MashupContent.elements";

import Diagram, { useSchema } from "beautiful-react-diagrams";
import "beautiful-react-diagrams/styles.css";

import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
	ITEM,
	CLIMATE,
	HUMIDITY,
	YEAR,
	CITY,
	PERIOD_OF_CITY,
	VISUALIZATION,
	CHART,
	COLUMN,
	LINE,
	MAPS,
	TABLE,
	TEMPERATURE,
	RAINFALL,
	STATISTICS_MERGE,
	OPERATORS,
	LINE_TWO_AXIS,
	LINE_THREE_AXIS,
	INDUSTRY,
	INDUSTRY_PRODUCTION,
} from "../../app/ItemTypes";

import {
	HumidityYear,
	HumidityCity,
	HumidityPeriodOfCity,
	ColumnChart,
	Maps,
	LineChart,
	Table,
	TemperatureCity,
	TemperatureYear,
	TemperaturePeriodOfCity,
	RainfallYear,
	RainfallCity,
	RainfallPeriodOfCity,
	StatisticsMerge,
	LineChartTwoAxis,
	LineChartThreeAxis,
	IndustryProductionYear,
	IndustryProductionCity,
	IndustryProductionPeriodOfCity,
} from "../../components/Widgets";
import {
	removeIdNode,
	setIdNewNode,
	setMerge,
	setNavbarNewOnClick,
	setOutput,
	setPortCanLinked,
	setPortIsLinked,
} from "../../app/slice/dashboardSlice";

const initialSchema = {
	nodes: [],
};

const MashupContent = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [schema, { onChange, addNode, removeNode, connect }] = useSchema(
		initialSchema
	);
	const isDropItem = useSelector((state) => state.dashboard.toolbar.isDragItem);

	const portCanLinked = useSelector(
		(state) => state.dashboard.mashupContent.portCanLinked
	);
	const port = useSelector((state) => state.dashboard.mashupContent.port);
	const navbarNewOnClick = useSelector(
		(state) => state.dashboard.navbar.newOnClick
	);
	const nodeId = useSelector((state) => state.dashboard.mashupContent.node);

	// dnd from list to container
	const [, dropList] = useDrop({
		accept: ITEM,
		drop: (item, monitor) => {
			addNewNode(monitor.getClientOffset().x, monitor.getClientOffset().y);
			return undefined;
		},
	});

	const getWidget = (id) => {
		const idArray = id.split("-");
		const dataCube = idArray[0];
		const dataSet = idArray[1];
		const filter = idArray[2];

		switch (dataCube) {
			case CLIMATE:
				if (dataSet === HUMIDITY) {
					if (filter === YEAR) {
						return HumidityYear;
					} else if (filter === CITY) {
						return HumidityCity;
					} else if (filter === PERIOD_OF_CITY) {
						return HumidityPeriodOfCity;
					}
				} else if (dataSet === TEMPERATURE) {
					if (filter === YEAR) {
						return TemperatureYear;
					} else if (filter === CITY) {
						return TemperatureCity;
					} else if (filter === PERIOD_OF_CITY) {
						return TemperaturePeriodOfCity;
					}
				} else if (dataSet === RAINFALL) {
					if (filter === YEAR) {
						return RainfallYear;
					} else if (filter === CITY) {
						return RainfallCity;
					} else if (filter === PERIOD_OF_CITY) {
						return RainfallPeriodOfCity;
					}
				}
				break;
			case INDUSTRY:
				if (dataSet === INDUSTRY_PRODUCTION) {
					if (filter === YEAR) {
						return IndustryProductionYear;
					} else if (filter === CITY) {
						return IndustryProductionCity;
					} else if (filter === PERIOD_OF_CITY) {
						return IndustryProductionPeriodOfCity;
					}
				}
				break;
			case OPERATORS:
				if (dataSet === STATISTICS_MERGE) {
					return StatisticsMerge;
				}
				break;
			case VISUALIZATION:
				if (dataSet === CHART) {
					if (filter === COLUMN) {
						return ColumnChart;
					} else if (filter === LINE) {
						return LineChart;
					} else if (filter === LINE_TWO_AXIS) {
						return LineChartTwoAxis;
					} else if (filter === LINE_THREE_AXIS) {
						return LineChartThreeAxis;
					}
				} else if (dataSet === MAPS) {
					return Maps;
				} else if (dataSet === TABLE) {
					return Table;
				}
				break;
			default:
				break;
		}
	};

	const deleteNodeFromSchema = (id) => {
		const nodeToRemove = schema.nodes.find((node) => node.id === id);
		removeNode(nodeToRemove);
	};

	const addNewNode = (x, y) => {
		const id = `${isDropItem}-${schema.nodes.length + 1}`;
		const nextNode = {
			id: id,
			coordinates: [x - 200, y - 70],
			render: getWidget(isDropItem),
			data: { onClick: deleteNodeFromSchema },
			inputs: [{ id: `portOut-${isDropItem}` }],
			outputs: [{ id: `port-${isDropItem}` }],
		};
		const action = setIdNewNode(id);
		dispatch(action);

		addNode(nextNode);
	};

	const connectNode = (inputId, outputId) => {
		connect(inputId, outputId);
	};

	useEffect(() => {
		if (portCanLinked === true) {
			connectNode(port[0], port[1]);
			let action = setPortCanLinked(false);
			dispatch(action);
		}
		// eslint-disable-next-line
	}, [portCanLinked]);

	useEffect(() => {
		if (navbarNewOnClick === true) {
			nodeId.map((id) => deleteNodeFromSchema(id));

			let action = setNavbarNewOnClick(false);
			dispatch(action);
			action = removeIdNode();
			dispatch(action);
			action = setOutput("clear");
			dispatch(action);
			action = setPortIsLinked([]);
			dispatch(action);
			action = setMerge([]);
			dispatch(action);
		}
		// eslint-disable-next-line
	}, [navbarNewOnClick]);

	return (
		<div className={classes.mashupContent} ref={dropList}>
			<Diagram schema={schema} onChange={onChange} />
		</div>
	);
};

export default MashupContent;
