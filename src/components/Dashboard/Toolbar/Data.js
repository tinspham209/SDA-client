export const listItems = [
	{
		id: "climate",
		name: "Climate",
		collapseItem: [
			{
				id: "avgTemperature",
				name: "Average Temperature",
				input: false,
				output: true,
			},
			{
				id: "avgHumidity",
				name: "Average Humidity",
				input: false,
				output: true,
			},
			{
				id: "avgRainfall",
				name: "Average Rainfall",
				input: false,
				output: true,
			},
		],
	},
	{
		id: "atmosphere",
		name: "Atmosphere",
		collapseItem: [
			{
				id: "airQualityStation",
				name: "Air Quality Station",
			},
			{
				id: "airQualityFilter",
				name: "Air Quality Filter",
			},
		],
	},
	{
		id: "population",
		name: "Population",
		collapseItem: [
			{
				id: "populationItem",
				name: "Population",
			},
		],
	},
	{
		id: "industry",
		name: "Industry",
		collapseItem: [
			{
				id: "industryItem",
				name: "Industry Production",
			},
		],
	},
	{
		id: "forest",
		name: "Forest",
		collapseItem: [
			{
				id: "forestCoverArea",
				name: "Forest Cover Area",
			},
			{
				id: "afForestation",
				name: "AfForestation",
			},
		],
	},
	{
		id: "operators",
		name: "Operators",
		collapseItem: [
			{
				id: "statisticsMerge",
				name: "Statistics Merge",
			},
			{
				id: "simpleMerge",
				name: "Simple Merge",
			},
		],
	},
	{
		id: "visualization",
		name: "Visualization",
		collapseItem: [
			{
				id: "columnChart",
				name: "Column Chart",
				input: true,
				output: false,
			},
			{
				id: "lineChart",
				name: "Line Chart",
				input: true,
				output: false,
			},
			{
				id: "pieChart",
				name: "Pie Chart",
				input: true,
				output: false,
			},
			{
				id: "maps-viz",
				name: "Maps",
				input: true,
				output: false,
			},
		],
	},
];
