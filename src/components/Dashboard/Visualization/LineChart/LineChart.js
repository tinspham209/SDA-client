import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { CustomLineChart } from "./LineChart.elements";
import { getHumidityData, getHumidityDataHanoi } from "../../../../api";

const LineChart = () => {
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
			categories: [],
		},
		yAxis: {
			title: {
				text: "deo bik dat ten gi",
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
						setDataLineChart((prevState) => ({
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
		<CustomLineChart>
			<HighchartsReact highcharts={Highcharts} options={dataLineChart} />
		</CustomLineChart>
	);
};

export default LineChart;
