import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { CustomColumnChart } from "./ColumnChart.elements";
import { getHumidityData, getHumidityDataHanoi } from "../../../../api";

const ColumnChart = () => {
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
			categories: [],
		},
		yAxis: {
			title: {
				text: "",
			},
		},
		tooltip: {
			pointFormat: "Humidity: <br> {point.y:.1f} </br>",
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true,
				},
				enableMouseTracking: false,
			},
		},
		series: [],
	});

	useEffect(() => {
		const fetchAPI = async () => {
			Promise.all([await getHumidityData(), await getHumidityDataHanoi()]).then(
				(value) => {
					value.map((data) => {
						let categories1 = [];
						let seriesData = [];

						// Get categories(yAxis) & seriesData (xAxis)
						data.bindings.map((binding) => {
							categories1.push(binding.Year.value);
							seriesData.push(Number(binding.Humidity.value));
							return null;
						});
						let series1 = {
							name: data.bindings[0].City.value,
							data: seriesData,
						};

						// update State of xAxis & yAxis
						setDataColumnChart((prevState) => ({
							...prevState,
							xAxis: {
								...prevState.xAxis,
								categories: categories1,
							},
							series: [...prevState.series, series1],
						}));

						return null;
					});
				}
			);
		};
		fetchAPI();
	}, []);

	return (
		<CustomColumnChart>
			<HighchartsReact highcharts={Highcharts} options={dataColumnChart} />
		</CustomColumnChart>
	);
};

export default ColumnChart;
