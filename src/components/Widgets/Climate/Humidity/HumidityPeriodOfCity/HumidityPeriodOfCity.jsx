import React, { useState, useEffect } from "react";

import { useStyles } from "./HumidityPeriodOfCity.elements";
import {
	IconButton,
	InputLabel,
	MenuItem,
	FormHelperText,
	FormControl,
	Select,
	Typography,
} from "@material-ui/core";

import { AiFillCloseCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

import { treeHumidity } from "../../../../../data/index";

import { setInfoWidget } from "../../../../../app/slice/dashboardSlice";
import { useDispatch } from "react-redux";

const HumidityPeriodOfCity = ({ id, data, inputs, outputs }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleQuestionButton = (id) => {
		const action = setInfoWidget(id);
		dispatch(action);
	};

	const [city, setCity] = useState("");
	const [fromYear, setFromYear] = useState("");
	const [toYear, setToYear] = useState("");
	const [warning, setWarning] = useState("");

	const handleCityChange = (event) => {
		setCity(event.target.value);
	};
	const handleFromYearChange = (event) => {
		setFromYear(event.target.value);
	};
	const handleToYearChange = (event) => {
		setToYear(event.target.value);
	};

	useEffect(() => {
		if (fromYear && toYear) {
			if (Number(fromYear) > Number(toYear)) {
				setToYear("");
				setWarning(`"To Year" field must be large than "From Year" field`);
			} else {
				setWarning("");
			}
		}
	}, [fromYear, toYear]);

	return (
		<div className={classes.node}>
			<div className={classes.header}>
				<div className={classes.headerLeft} />
				<div className={classes.headerCenter}>
					<p className={classes.headerTitle}>{treeHumidity.name}</p>
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
			<div className={classes.body}>
				<div className={classes.portOut}>
					{outputs.map((port) =>
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
				<div className={classes.title}>
					<Typography variant="subtitle1">Period Of City</Typography>
				</div>
				<FormControl required className={classes.formControl}>
					<InputLabel id="city-label">City</InputLabel>
					<Select
						labelId="city-label"
						id="city"
						value={city}
						onChange={handleCityChange}
						className={classes.selectEmpty}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{treeHumidity.city.children.map((item) => (
							<MenuItem key={item.id} value={item.id}>
								{item.name}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>Required</FormHelperText>
				</FormControl>
				<FormControl required className={classes.formControl}>
					<InputLabel id="FromYear-label">From Year</InputLabel>
					<Select
						labelId="FromYear-label"
						id="FromYear"
						value={fromYear}
						onChange={handleFromYearChange}
						className={classes.selectEmpty}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{treeHumidity.year.children.map((item) => (
							<MenuItem key={item.id} value={item.id}>
								{item.name}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>Required</FormHelperText>
				</FormControl>
				<FormControl required className={classes.formControl}>
					<InputLabel id="toYear-label">To Year</InputLabel>
					<Select
						labelId="toYear-label"
						id="toYear"
						value={toYear}
						onChange={handleToYearChange}
						className={classes.selectEmpty}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{treeHumidity.year.children.map((item) => (
							<MenuItem key={item.id} value={item.id}>
								{item.name}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>Required</FormHelperText>
				</FormControl>
				{warning ? (
					<Typography variant="subtitle2" color="error">
						Warning: {warning}
					</Typography>
				) : null}
			</div>
		</div>
	);
};

export default HumidityPeriodOfCity;
