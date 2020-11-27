import React from "react";

import { useStyles } from "./Maps.elements";
import { IconButton, Button } from "@material-ui/core";

import { AiFillCloseCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

import Maps from "../../../Visualization/Maps/Maps";

import { useSelector, useDispatch } from "react-redux";
import {
	setInfoWidget,
	setMapsData,
	setPortCanLinked,
	setPortIsLinked,
	setTitleMaps,
} from "../../../../app/slice/dashboardSlice";
import { CLIMATE_HUMIDITY } from "../../../../app/ItemTypes";
import { getHumidityByYear } from "../../../../api";
import { vn } from "../../../../api/vnId";

const WidgetMaps = ({ id, data, inputs, outputs }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const itemIsSelect = useSelector(
		(state) => state.dashboard.mashupContent.itemIsSelect
	);

	const handleOnClick = () => {
		console.log("itemIsSelect", itemIsSelect);

		const portWidget = itemIsSelect.split("-")[0];
		const portViz = id.split("-")[0];
		const portLinked = [`port-${portWidget}`, `port-${portViz}`];
		let action = setPortIsLinked(portLinked);
		dispatch(action);
		action = setPortCanLinked(true);
		dispatch(action);

		const year = itemIsSelect.split("-")[2];
		const name = `Humidity of VN ${year}`;
		action = setTitleMaps(name);
		dispatch(action);

		const dataMaps = [];
		if (itemIsSelect.split("-")[0] === CLIMATE_HUMIDITY) {
			console.log('itemIsSelect.split("-")[1]: ', itemIsSelect.split("-")[1]);
			if (itemIsSelect.split("-")[1] === "year") {
				const year = itemIsSelect.split("-")[2];
				console.log("year: ", year);
				const fetchAPI = async () => {
					Promise.all([await getHumidityByYear(year)]).then((values) => {
						values[0].results.bindings.map((item) => {
							let city = item.city.value;
							if (city === "Bãi Cháy") {
								city = "Quảng Ninh";
							} else if (city === "Đà Lạt") {
								city = "Lâm Đồng";
							} else if (city === "Huế") {
								city = "Thừa Thiên Huế";
							} else if (city === "Nha Trang") {
								city = "Khánh Hoà";
							} else if (city === "Pleiku") {
								city = "Gia Lai";
							} else if (city === "Qui Nhơn") {
								city = "Bình Định";
							} else if (city === "Vinh") {
								city = "Nghệ An";
							} else if (city === "Vũng Tàu") {
								city = "Bà Rịa - Vũng Tàu";
							}

							const cityId = vn.find((item) => {
								return city === item.name;
							});
							const id = cityId.id;
							const value = Number(item.value.value).toPrecision();
							const object = [id, value];
							console.log("object: ", object);
							dataMaps.push(object);
							return null;
						});
						console.log("dataMaps", dataMaps);
						action = setMapsData(dataMaps);
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
					<p className={classes.headerTitle}>Maps</p>
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
			<div className={classes.body} draggable={false}>
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
				<Maps />
			</div>
		</div>
	);
};

export default WidgetMaps;
