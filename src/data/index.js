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
				disabled: false,
			},
			{
				id: "humidity",
				name: "Average Humidity",
				input: false,
				output: true,
				button: false,
				disabled: false,
			},
			{
				id: "avgRainfall",
				name: "Average Rainfall",
				input: false,
				output: true,
				disabled: true,
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
				disabled: true,
			},
			{
				id: "airQualityFilter",
				name: "Air Quality Filter",
				disabled: true,
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
				disabled: true,
			},
		],
	},
	{
		id: "industry",
		name: "Industry",
		collapseItem: [
			{
				id: "industry",
				name: "Industry Production",
				input: false,
				output: true,
				button: false,
				disabled: false,
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
				disabled: true,
			},
			{
				id: "afForestation",
				name: "AfForestation",
				disabled: true,
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
				disabled: false,
			},
			{
				id: "simpleMerge",
				name: "Simple Merge",
				disabled: true,
			},
		],
	},
	{
		id: "visualization",
		name: "Visualization",
		collapseItem: [
			{
				id: "table",
				name: "Table",
				input: true,
				output: false,
				button: true,
				disabled: false,
			},
			{
				id: "columnChart",
				name: "Column Chart",
				input: true,
				output: false,
				button: true,
				disabled: false,
			},
			{
				id: "lineChart",
				name: "Line Chart",
				input: true,
				output: false,
				button: true,
				disabled: false,
			},
			{
				id: "pieChart",
				name: "Pie Chart",
				input: true,
				output: false,
				button: true,
				disabled: false,
			},
			{
				id: "mapsViz",
				name: "Maps",
				input: true,
				output: false,
				button: true,
				disabled: false,
			},
		],
	},
];

export const widgetInfos = {
	columnChart: [
		{
			id: "Name",
			info: "Column Chart",
		},
		{
			id: "Description",
			info: "Used to draw a Column chart, using HighCharts",
		},
		{
			id: "Input",
			info: "json data",
		},
		{
			id: "Output",
			info: "no",
		},
		{
			id: "Connect",
			info: "Statistics widgets",
		},
	],
	lineChart: [
		{
			id: "Name",
			info: "Line Chart",
		},
		{
			id: "Description",
			info: "Used to draw a Line chart, using HighCharts",
		},
		{
			id: "Input",
			info: "json data",
		},
		{
			id: "Output",
			info: "no",
		},
		{
			id: "Connect",
			info: "Statistics widgets",
		},
	],
	pieChart: [
		{
			id: "Name",
			info: "Pie Chart",
		},
		{
			id: "Description",
			info: "Used to draw a Pie chart, using HighCharts",
		},
		{
			id: "Input",
			info: "json data",
		},
		{
			id: "Output",
			info: "no",
		},
		{
			id: "Connect",
			info: "Statistics widgets",
		},
	],
	mapsViz: [
		{
			id: "Name",
			info: "Maps",
		},
		{
			id: "Description",
			info: "Used to display locations with their long & lat",
		},
		{
			id: "Input",
			info: "Json data with attribute point(long, lat)",
		},
		{
			id: "Output",
			info: "no",
		},
		{
			id: "Connect",
			info: "Industry, Average Temperature",
		},
	],
	humidity: [
		{
			id: "Name",
			info: "Average Humidity",
		},
		{
			id: "Description",
			info:
				"Used to get data of humidity each province from 2012 to 2019. Combine with Charts to view results",
		},
		{
			id: "Input",
			info: "No",
		},
		{
			id: "Output",
			info: "json",
		},
		{
			id: "Connect",
			info: "Column, Line Chart",
		},
	],
	industry: [
		{
			id: "Name",
			info: "Industry Production",
		},
		{
			id: "Description",
			info: "aaaaaaaa",
		},
		{
			id: "Input",
			info: "No",
		},
		{
			id: "Output",
			info: "json",
		},
		{
			id: "Connect",
			info: "Maps",
		},
	],
	avgTemperature: [
		{
			id: "Name",
			info: "Average Temperature",
		},
		{
			id: "Description",
			info: "aaaaaaaa",
		},
		{
			id: "Input",
			info: "No",
		},
		{
			id: "Output",
			info: "json",
		},
		{
			id: "Connect",
			info: "Maps",
		},
	],
	statisticsMerge: [
		{
			id: "Name",
			info: "Statistics Merge",
		},
		{
			id: "Description",
			info:
				"	Used to merge two sources of statistical data, based on their common field",
		},
		{
			id: "Input",
			info: "Two Json arrays",
		},
		{
			id: "Output",
			info: "The new Json array",
		},
		{
			id: "Connect",
			info: "2 statistical data widget, Charts, Maps,...",
		},
	],
	table: [
		{
			id: "Name",
			info: "Table",
		},
		{
			id: "Description",
			info: "aaaaaaaaaaaaaaaa",
		},
		{
			id: "Input",
			info: "Json",
		},
		{
			id: "Output",
			info: "No",
		},
		{
			id: "Connect",
			info: "Industry Production, Average Temperature,...",
		},
	],
};

export const treeIndustry = {
	name: "Industry Production",
	id: "industry",
	data: [
		{
			id: "year",
			name: "Year",
			children: [
				{
					id: "2012",
					name: "2012",
				},
				{
					id: "2013",
					name: "2013",
				},
				{
					id: "2014",
					name: "2014",
				},
				{
					id: "2015",
					name: "2015",
				},
				{
					id: "2016",
					name: "2016",
				},
				{
					id: "2017",
					name: "2017",
				},
				{
					id: "2018",
					name: "2018",
				},
				{
					id: "2019",
					name: "2019",
				},
			],
		},
	],
};

export const treeTemperature = {
	name: "Average Temperature",
	data: [
		{
			id: "temperature",
			name: "Temperature",
			children: [
				{
					id: "avgTemperature-2012",
					name: "2012",
				},
				{
					id: "avgTemperature-2013",
					name: "2013",
				},
				{
					id: "avgTemperature-2014",
					name: "2014",
				},
				{
					id: "avgTemperature-2015",
					name: "2015",
				},
				{
					id: "avgTemperature-2016",
					name: "2016",
				},
				{
					id: "avgTemperature-2017",
					name: "2017",
				},
				{
					id: "avgTemperature-2018",
					name: "2018",
				},
				{
					id: "avgTemperature-2019",
					name: "2019",
				},
			],
		},
	],
};

export const treeHumidity = {
	name: "Average Humidity",
	id: "humidity",
	data: [
		{
			id: "year",
			name: "Year",
			children: [
				{
					id: "2012",
					name: "2012",
				},
				{
					id: "2013",
					name: "2013",
				},
				{
					id: "2014",
					name: "2014",
				},
				{
					id: "2015",
					name: "2015",
				},
				{
					id: "2016",
					name: "2016",
				},
				{
					id: "2017",
					name: "2017",
				},
				{
					id: "2018",
					name: "2018",
				},
				{
					id: "2019",
					name: "2019",
				},
			],
		},
	],
};
