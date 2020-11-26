import React from "react";
import { useStyles } from "./Table.elements";

import {
	Table,
	TableBody,
	TableHead,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
} from "@material-ui/core";

import { useSelector } from "react-redux";

const TableComponent = () => {
	const classes = useStyles();
	const data = useSelector((state) => state.dashboard.viz.table.data);

	return (
		<div className={classes.tableComponent}>
			<TableContainer component={Paper}>
				<Table className={classes.table} stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell align="left">City</TableCell>
							<TableCell align="left">Year</TableCell>
							<TableCell align="left">Value</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((item, index) => (
							<TableRow hover key={index}>
								<TableCell align="left">{item.city}</TableCell>
								<TableCell align="left">{item.year}</TableCell>
								<TableCell align="left">{item.value}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableComponent;
