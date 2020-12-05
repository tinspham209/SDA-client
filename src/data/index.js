export const listItems = [
	{
		id: "climate",
		name: "Climate",
		collapseItem: [
			{
				id: "temperature",
				name: "Average Temperature",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
			},
			{
				id: "humidity",
				name: "Average Humidity",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
			},
			{
				id: "rainfall",
				name: "Average Rainfall",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
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
				id: "production",
				name: "Industry Production",
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
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
				children: [
					{
						id: "year",
						name: "Filter by Year",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "city",
						name: "Filer by City",
						input: false,
						output: true,
						disabled: false,
					},
					{
						id: "periodOfCity",
						name: "Filter by period of city",
						input: false,
						output: true,
						disabled: false,
					},
				],
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
				id: "chart",
				name: "Charts",
				children: [
					{
						id: "column",
						name: "Column Chart",
						input: true,
						output: false,
						button: true,
						disabled: false,
					},
					{
						id: "line",
						name: "Line Chart",
						input: true,
						output: false,
						button: true,
						disabled: false,
					},
					{
						id: "pie",
						name: "Pie Chart",
						input: true,
						output: false,
						button: true,
						disabled: false,
					},
				],
			},
			{
				id: "maps",
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
	visualization: {
		chart: {
			column: [
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
			line: [
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
			pie: [
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
		},
		maps: [
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
	},
	climate: {
		humidity: {
			year: [
				{
					id: "Name",
					info: "Average Humidity",
				},
				{
					id: "Description",
					info:
						"Get humidity data of Vietnam's provinces in a specific year. Combine with Maps to view results",
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
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Average Humidity",
				},
				{
					id: "Description",
					info:
						"Get humidity data of a specific city from 2012 to 2019. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Average Humidity",
				},
				{
					id: "Description",
					info:
						"Get humidity data of a specific city in the a years range. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
		},
		temperature: {
			year: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get temperature data of Vietnam's provinces in a specific year. Combine with Maps to view results",
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
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get temperature data of a specific city from 2012 to 2019. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get temperature data of a specific city in the a years range. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
		},
		rainfall: {
			year: [
				{
					id: "Name",
					info: "Average Rainfall",
				},
				{
					id: "Description",
					info:
						"Get rainfall data of Vietnam's provinces in a specific year. Combine with Maps to view results",
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
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get rainfall data of a specific city from 2012 to 2019. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Average Temperature",
				},
				{
					id: "Description",
					info:
						"Get rainfall data of a specific city in the a years range. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
		},
	},

	industry: {
		production: {
			year: [
				{
					id: "Name",
					info: "Industry Production",
				},
				{
					id: "Description",
					info:
						"Get industry data of Vietnam's provinces in a specific year. Combine with Maps to view results",
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
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "Industry Production",
				},
				{
					id: "Description",
					info:
						"Get industry data of a specific city from 2012 to 2019. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "Industry Production",
				},
				{
					id: "Description",
					info:
						"Get industry data of a specific city in the a years range. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
		},
	},
	forest: {
		afForestation: {
			year: [
				{
					id: "Name",
					info: "AfForestation",
				},
				{
					id: "Description",
					info:
						"Get AfForestation data of Vietnam's provinces in a specific year. Combine with Maps to view results",
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
					info: "Maps, Table",
				},
			],
			city: [
				{
					id: "Name",
					info: "AfForestation",
				},
				{
					id: "Description",
					info:
						"Get AfForestation data of a specific city from 2012 to 2019. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
			periodOfCity: [
				{
					id: "Name",
					info: "AfForestation",
				},
				{
					id: "Description",
					info:
						"Get AfForestation data of a specific city in the a years range. Combine with Charts to view results",
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
					info: "Line, Column chart, Table",
				},
			],
		},
	},
	operators: {
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
	},
};

export const treeIndustry = {
	name: "Industry Production",
	id: "industry-production",
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
		{
			id: "city",
			name: "City",
			children: [
				{
					name: "Quảng Ninh",
					id: "quangninh",
				},
				{
					name: "Khánh Hoà",
					id: "khanhhoa",
				},
				{
					name: "Tiền Giang",
					id: "tiengiang",
				},
				{
					name: "Bà Rịa - Vũng Tàu",
					id: "bariavungtau",
				},
				{
					name: "Bình Thuận",
					id: "binhthuan",
				},
				{
					name: "TP.Hồ Chí Minh",
					id: "hochiminh",
				},
				{
					name: "Bến Tre",
					id: "bentre",
				},
				{
					name: "Sóc Trăng",
					id: "soctrang",
				},
				{
					name: "Phú Thọ",
					id: "phutho",
				},
				{
					name: "Yên Bái",
					id: "yenbai",
				},
				{
					name: "Hải Dương",
					id: "haiduong",
				},
				{
					name: "Bắc Ninh",
					id: "bacninh",
				},
				{
					name: "Hưng Yên",
					id: "hungyen",
				},
				{
					name: "Ninh Bình",
					id: "ninhbinh",
				},
				{
					name: "Hà Nam",
					id: "hanam",
				},
				{
					name: "Hoà Bình",
					id: "hoabinh",
				},
				{
					name: "Vĩnh Phúc",
					id: "vinhphuc",
				},
				{
					name: "Hà Nội",
					id: "hanoi",
				},
				{
					name: "Bắc Giang",
					id: "bacgiang",
				},
				{
					name: "Thái Bình",
					id: "thaibinh",
				},
				{
					name: "Lâm Đồng",
					id: "lamdong",
				},
				{
					name: "Bình Phước",
					id: "binhphuoc",
				},
				{
					name: "Phú Yên",
					id: "phuyen",
				},
				{
					name: "Bình Định",
					id: "binhdinh",
				},
				{
					name: "Gia Lai",
					id: "gialai",
				},
				{
					name: "Quảng Ngãi",
					id: "quangngai",
				},
				{
					name: "Đồng Nai",
					id: "dongnai",
				},
				{
					name: "Đồng Tháp",
					id: "dongthap",
				},
				{
					name: "Long An",
					id: "longan",
				},
				{
					name: "Hải Phòng",
					id: "haiphong",
				},
				{
					name: "Hậu Giang",
					id: "haugiang",
				},
				{
					name: "Bạc Liêu",
					id: "baclieu",
				},
				{
					name: "Vĩnh Long",
					id: "vinhlong",
				},
				{
					name: "Tây Ninh",
					id: "tayninh",
				},
				{
					name: "Thái Nguyên",
					id: "thainguyen",
				},
				{
					name: "Lai Châu",
					id: "laichau",
				},
				{
					name: "Sơn La",
					id: "sonla",
				},
				{
					name: "Hà Giang",
					id: "hagiang",
				},
				{
					name: "Nam Định",
					id: "namdinh",
				},
				{
					name: "Hà Tĩnh",
					id: "hatinh",
				},
				{
					name: "Nghệ An",
					id: "nghean",
				},
				{
					name: "Quảng Bình",
					id: "quangbinh",
				},
				{
					name: "Đắk Lắk",
					id: "daklak",
				},
				{
					name: "Ninh Thuận",
					id: "ninhthuan",
				},
				{
					name: "Đắk Nông",
					id: "daknong",
				},
				{
					name: "Kon Tum",
					id: "kontum",
				},
				{
					name: "Quảng Nam",
					id: "quangnam",
				},
				{
					name: "Quảng Trị",
					id: "quangtri",
				},
				{
					name: "Thừa Thiên Huế",
					id: "thuathienhue",
				},
				{
					name: "Đà Nẵng",
					id: "danang",
				},
				{
					name: "An Giang",
					id: "angiang",
				},
				{
					name: "Cà Mau",
					id: "camau",
				},
				{
					name: "Trà Vinh",
					id: "travinh",
				},
				{
					name: "Cao Bằng",
					id: "caobang",
				},
				{
					name: "Kiên Giang",
					id: "kiengiang",
				},
				{
					name: "Lào Cai",
					id: "laocai",
				},
				{
					name: "Điện Biên",
					id: "dienbien",
				},
				{
					name: "Lạng Sơn",
					id: "langson",
				},
				{
					name: "Thanh Hoá",
					id: "thanhhoa",
				},
				{
					name: "Bắc Kạn",
					id: "backan",
				},
				{
					name: "Tuyên Quang",
					id: "tuyenquang",
				},
				{
					name: "Bình Dương",
					id: "binhduong",
				},
				{
					name: "Cần Thơ",
					id: "cantho",
				},
			],
		},
	],
};

export const treeHumidity = {
	name: "Average Humidity",
	id: "climate-humidity",
	year: {
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
	city: {
		id: "city",
		name: "City",
		children: [
			{
				id: "baichay",
				name: "Bãi Cháy",
			},
			{
				id: "camau",
				name: "Cà Mau",
			},
			{
				id: "dalat",
				name: "Đà Lạt",
			},
			{
				id: "danang",
				name: "Đà Nẵng",
			},
			{
				id: "hanoi",
				name: "Hà Nội",
			},
			{
				id: "hue",
				name: "Huế",
			},
			{
				id: "laichau",
				name: "Lai Châu",
			},
			{
				id: "namdinh",
				name: "Nam Định",
			},
			{
				id: "nhatrang",
				name: "Nha Trang",
			},
			{
				id: "pleiku",
				name: "Pleiku",
			},
			{
				id: "quinhon",
				name: "Qui Nhơn",
			},
			{
				id: "sonla",
				name: "Sơn La",
			},
			{
				id: "tuyenquang",
				name: "Tuyên Quang",
			},
			{
				id: "vinh",
				name: "Vinh",
			},
			{
				id: "vungtau",
				name: "Vũng Tàu",
			},
		],
	},
};

export const treeTemperature = {
	name: "Average Temperature",
	id: "climate-temperature",
	year: {
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
	city: {
		id: "city",
		name: "City",
		children: [
			{
				id: "baichay",
				name: "Bãi Cháy",
			},
			{
				id: "camau",
				name: "Cà Mau",
			},
			{
				id: "dalat",
				name: "Đà Lạt",
			},
			{
				id: "danang",
				name: "Đà Nẵng",
			},
			{
				id: "hanoi",
				name: "Hà Nội",
			},
			{
				id: "hue",
				name: "Huế",
			},
			{
				id: "laichau",
				name: "Lai Châu",
			},
			{
				id: "namdinh",
				name: "Nam Định",
			},
			{
				id: "nhatrang",
				name: "Nha Trang",
			},
			{
				id: "pleiku",
				name: "Pleiku",
			},
			{
				id: "quinhon",
				name: "Qui Nhơn",
			},
			{
				id: "sonla",
				name: "Sơn La",
			},
			{
				id: "tuyenquang",
				name: "Tuyên Quang",
			},
			{
				id: "vinh",
				name: "Vinh",
			},
			{
				id: "vungtau",
				name: "Vũng Tàu",
			},
		],
	},
};

export const treeRainfall = {
	name: "Average Rainfall",
	id: "climate-rainfall",
	year: {
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
	city: {
		id: "city",
		name: "City",
		children: [
			{
				id: "camau",
				name: "Cà Mau",
			},
			{
				id: "dalat",
				name: "Đà Lạt",
			},
			{
				id: "danang",
				name: "Đà Nẵng",
			},
			{
				id: "hanoi",
				name: "Hà Nội",
			},
			{
				id: "hue",
				name: "Huế",
			},
			{
				id: "laichau",
				name: "Lai Châu",
			},
			{
				id: "namdinh",
				name: "Nam Định",
			},
			{
				id: "nhatrang",
				name: "Nha Trang",
			},
			{
				id: "pleiku",
				name: "Pleiku",
			},
			{
				id: "quinhon",
				name: "Qui Nhơn",
			},
			{
				id: "sonla",
				name: "Sơn La",
			},
			{
				id: "tuyenquang",
				name: "Tuyên Quang",
			},
			{
				id: "vinh",
				name: "Vinh",
			},
			{
				id: "vungtau",
				name: "Vũng Tàu",
			},
		],
	},
};
