import React from "react";

import {
	DashboardContainer,
	GridContainer,
	Layout,
} from "./Dashboard.elements";

import { Toolbar, Content } from "./index";

const Dashboard = () => {
	return (
		<Layout>
			<DashboardContainer>
				<GridContainer container spacing={1}>
					<GridContainer item xs={2}>
						<Toolbar />
					</GridContainer>
					<GridContainer item xs={8}>
						<Content />
					</GridContainer>
					<GridContainer item xs>
						<div style={{ border: "1px solid red" }}></div>
					</GridContainer>
				</GridContainer>
			</DashboardContainer>
		</Layout>
	);
};

export default Dashboard;
