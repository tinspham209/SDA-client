import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

export const Layout = styled.div`
	background-color: rgba(242, 242, 242);
`;

export const DashboardContainer = styled.div`
	flex-grow: 1;

	width: 100%;
	max-width: 1500px;

	margin: 4px auto 0 auto;

	overflow: hidden;
	z-index: 1;
`;

export const GridContainer = styled(Grid)`
	height: calc(100vh - 80px);
`;
