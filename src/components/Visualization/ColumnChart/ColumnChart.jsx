import React, { useState } from "react";
import { useStyles } from "./ColumnChart.elements";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart = (data) => {
	const classes = useStyles();

	const [dataColumnChart, setDataColumnChart] = useState({
		chart: {
			type: "column",
		},
		title: {
			text: "Yearly Average Humidity",
		},
		subtitle: {
			text: "Source: aaaaaa",
		},
		xAxis: {
			categories: ["2012", "2013", "2014"],
		},
		yAxis: {
			title: {
				text: "",
			},
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true,
				},
				enableMouseTracking: false,
			},
		},
		series: [
			{
				name: "Cà Mau",
				data: [10, 20, 30],
			},
		],
	});
	return (
		<div className={classes.columnChart}>
			<HighchartsReact highcharts={Highcharts} options={dataColumnChart} />
		</div>
	);
};

export default ColumnChart;
