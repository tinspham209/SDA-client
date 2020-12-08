import React, { useEffect, useState } from "react";
import { useStyles } from "./ColumnChart.elements";
import { useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart = () => {
	const classes = useStyles();
	const columnCategories = useSelector(
		(state) => state.dashboard.viz.column.categories
	);
	const columnSeries = useSelector((state) => state.dashboard.viz.column.data);
	const columnTitle = useSelector((state) => state.dashboard.viz.column.title);
	const columnUnit = useSelector((state) => state.dashboard.viz.column.unit);

	const [dataColumnChart, setDataColumnChart] = useState({
		chart: {
			type: "column",
			options3d: {
				enabled: true,
				alpha: 15,
				beta: 15,
				depth: 50,
				viewDistance: 25,
			},
		},
		title: {
			text: "",
		},
		subtitle: {
			text: "Source: ",
		},
		xAxis: {
			categories: [
				"2012",
				"2013",
				"2014",
				"2015",
				"2016",
				"2017",
				"2018",
				"2019",
			],
			crosshair: true,
			labels: {
				skew3d: true,
				style: {
					fontSize: "16px",
				},
			},
		},
		yAxis: {
			min: 0,
			title: {
				text: "",
			},
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat:
				'<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
			footerFormat: "</table>",
			shared: true,
			useHTML: true,
		},
		plotOptions: {
			column: {
				stacking: "normal",
				depth: 40,
			},
		},
		series: [],
	});

	useEffect(() => {
		if (columnSeries && columnCategories && columnTitle && columnUnit) {
			setDataColumnChart({
				...dataColumnChart,
				xAxis: {
					...dataColumnChart.xAxis,
					categories: columnCategories,
				},
				series: columnSeries,
				title: {
					text: columnTitle,
				},
				yAxis: {
					...dataColumnChart.yAxis,
					title: {
						text: columnUnit,
					},
				},
			});
		}

		// eslint-disable-next-line
	}, [columnSeries, columnCategories, columnTitle, columnUnit]);

	return (
		<div className={classes.columnChart}>
			<HighchartsReact highcharts={Highcharts} options={dataColumnChart} />
		</div>
	);
};

export default ColumnChart;
