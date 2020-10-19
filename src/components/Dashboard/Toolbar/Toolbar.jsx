import React, { useState } from "react";
import {
	CustomToolbar,
	CustomList,
	CustomListSubheader,
	CustomListItem,
	CustomListItemText,
	CustomCollapse,
} from "./Toolbar.elements";

import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Toolbar = () => {
	const [openClimate, setOpenClimate] = useState(false);
	const [openAtmosphere, setOpenAtmosphere] = useState(false);
	const [openPopulation, setOpenPopulation] = useState(false);
	const [openIndustry, setOpenIndustry] = useState(false);
	const [openForest, setOpenForest] = useState(false);
	const [openOperators, setOpenOperators] = useState(false);
	const [openVisualization, setOpenVisualization] = useState(false);

	const handleClick = (object) => {
		switch (object) {
			case "climate":
				setOpenClimate(!openClimate);
				break;
			case "atmosphere":
				setOpenAtmosphere(!openAtmosphere);
				break;
			case "population":
				setOpenPopulation(!openPopulation);
				break;
			case "industry":
				setOpenIndustry(!openIndustry);
				break;
			case "forest":
				setOpenForest(!openForest);
				break;
			case "operators":
				setOpenOperators(!openOperators);
				break;
			case "visualization":
				setOpenVisualization(!openVisualization);
				break;
			default:
				break;
		}
	};

	return (
		<CustomToolbar>
			<CustomList
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<CustomListSubheader component="div" id="nested-list-subheader">
						Widgets
					</CustomListSubheader>
				}
			>
				{/* Climate */}
				<CustomListItem button onClick={() => handleClick("climate")}>
					<CustomListItemText primary="Climate" />
					{openClimate ? <MdExpandLess /> : <MdExpandMore />}
				</CustomListItem>
				<CustomCollapse in={openClimate} timeout="auto" unmountOnExit>
					<CustomList component="div" disablePadding>
						<CustomListItem button>
							<CustomListItemText primary="Average Temperature" />
						</CustomListItem>
						<CustomListItem button>
							<CustomListItemText primary="Average Precipitation" />
						</CustomListItem>
						<CustomListItem button>
							<CustomListItemText primary="Average Rainfall" />
						</CustomListItem>
					</CustomList>
				</CustomCollapse>

				{/* Atmosphere */}
				<CustomListItem button onClick={() => handleClick("atmosphere")}>
					<CustomListItemText primary="Atmosphere" />
					{openAtmosphere ? <MdExpandLess /> : <MdExpandMore />}
				</CustomListItem>
				<CustomCollapse in={openAtmosphere} timeout="auto" unmountOnExit>
					<CustomList component="div" disablePadding>
						<CustomListItem button>
							<CustomListItemText primary="Air Quality Station" />
						</CustomListItem>
						<CustomListItem button>
							<CustomListItemText primary="Air Quality Filter" />
						</CustomListItem>
					</CustomList>
				</CustomCollapse>

				{/* Population */}
				<CustomListItem button onClick={() => handleClick("population")}>
					<CustomListItemText primary="Population" />
					{openPopulation ? <MdExpandLess /> : <MdExpandMore />}
				</CustomListItem>
				<CustomCollapse in={openPopulation} timeout="auto" unmountOnExit>
					<CustomList component="div" disablePadding>
						<CustomListItem button>
							<CustomListItemText primary="Population" />
						</CustomListItem>
					</CustomList>
				</CustomCollapse>

				{/* Industry */}
				<CustomListItem button onClick={() => handleClick("industry")}>
					<CustomListItemText primary="Industry" />
					{openIndustry ? <MdExpandLess /> : <MdExpandMore />}
				</CustomListItem>
				<CustomCollapse in={openIndustry} timeout="auto" unmountOnExit>
					<CustomList component="div" disablePadding>
						<CustomListItem button>
							<CustomListItemText primary="Industry Production" />
						</CustomListItem>
					</CustomList>
				</CustomCollapse>

				{/* Forest */}
				<CustomListItem button onClick={() => handleClick("forest")}>
					<CustomListItemText primary="Forest" />
					{openForest ? <MdExpandLess /> : <MdExpandMore />}
				</CustomListItem>
				<CustomCollapse in={openForest} timeout="auto" unmountOnExit>
					<CustomList component="div" disablePadding>
						<CustomListItem button>
							<CustomListItemText primary="Forest Cover Area" />
						</CustomListItem>
						<CustomListItem button>
							<CustomListItemText primary="Afforestation" />
						</CustomListItem>
					</CustomList>
				</CustomCollapse>

				{/* Operators */}
				<CustomListItem button onClick={() => handleClick("operators")}>
					<CustomListItemText primary="Operators" />
					{openOperators ? <MdExpandLess /> : <MdExpandMore />}
				</CustomListItem>
				<CustomCollapse in={openOperators} timeout="auto" unmountOnExit>
					<CustomList component="div" disablePadding>
						<CustomListItem button>
							<CustomListItemText primary="Statistics Merge" />
						</CustomListItem>
						<CustomListItem button>
							<CustomListItemText primary="Simple Merge" />
						</CustomListItem>
					</CustomList>
				</CustomCollapse>

				{/* Visualization */}
				<CustomListItem button onClick={() => handleClick("visualization")}>
					<CustomListItemText primary="Visualization" />
					{openVisualization ? <MdExpandLess /> : <MdExpandMore />}
				</CustomListItem>
				<CustomCollapse in={openVisualization} timeout="auto" unmountOnExit>
					<CustomList component="div" disablePadding>
						<CustomListItem button>
							<CustomListItemText primary="Column Chart" />
						</CustomListItem>
						<CustomListItem button>
							<CustomListItemText primary="Line Chart" />
						</CustomListItem>
						<CustomListItem button>
							<CustomListItemText primary="Pie Chart" />
						</CustomListItem>
						<CustomListItem button>
							<CustomListItemText primary="Maps" />
						</CustomListItem>
					</CustomList>
				</CustomCollapse>
			</CustomList>
		</CustomToolbar>
	);
};

export default Toolbar;
