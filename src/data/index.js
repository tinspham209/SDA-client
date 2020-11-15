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
				button: false,
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
				input: false,
				output: true,
				button: false,
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
				button: true,
			},
			{
				id: "lineChart",
				name: "Line Chart",
				input: true,
				output: false,
				button: true,
			},
			{
				id: "pieChart",
				name: "Pie Chart",
				input: true,
				output: false,
				button: true,
			},
			{
				id: "mapsViz",
				name: "Maps",
				input: true,
				output: false,
				button: true,
			},
		],
	},
];

export const treeIndustry = {
	name: "Industry Production",
	data: [
		{
			id: "industry",
			name: "Industry",
			children: [
				{
					id: "industryItem-2012",
					name: "2012",
				},
				{
					id: "industryItem-2013",
					name: "2013",
				},
				{
					id: "industryItem-2014",
					name: "2014",
				},
				{
					id: "industryItem-2015",
					name: "2015",
				},
				{
					id: "industryItem-2016",
					name: "2016",
				},
				{
					id: "industryItem-2017",
					name: "2017",
				},
				{
					id: "industryItem-2018",
					name: "2018",
				},
				{
					id: "industryItem-2019",
					name: "2019",
				},
			],
		},
	],
};

export const treeHumidity = {
	name: "Average Humidity",
	data: [
		{
			id: "avgHumidity-camau",
			name: "Cà Mau",
		},
		{
			id: "avgHumidity-hanoi",
			name: "Hà Nội",
		},
	],
};
