import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

const ListItemComponent = ({ id, primary }) => {
	return (
		<ListItem button id={id}>
			<ListItemText primary={primary} />
		</ListItem>
	);
};

export default ListItemComponent;
