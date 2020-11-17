import React, { useState } from "react";
import { useStyles } from "./LineChart.elements";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = (data) => {
	const classes = useStyles();

	const [dataLineChart, setDataLineChart] = useState({
		chart: {
			type: "line",
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
		<div className={classes.lineChart}>
			<HighchartsReact highcharts={Highcharts} options={dataLineChart} />
		</div>
	);
};

export default LineChart;
