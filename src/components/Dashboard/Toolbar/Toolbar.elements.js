import styled from "styled-components";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

export const CustomToolbar = styled.div`
	height: calc(100vh - 60px - 8px);
	background-color: rgb(242, 242, 242);
	overflow-y: auto;
	border: 1px solid #000;
`;

export const CustomList = styled(List)`
	width: 100%;
	max-width: 360;
`;

export const CustomListSubheader = styled(ListSubheader)``;

export const CustomListItem = styled(ListItem)`
	padding-left: 16px !important;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2) !important;
`;

export const CustomListItemText = styled(ListItemText)``;

export const CustomCollapse = styled(Collapse)`
	padding-left: 10px !important;
	padding-right: 10px !important;
`;
