import React from "react";

import { useStyles } from "./ListItem.elements";
import { ListItem, ListItemText } from "@material-ui/core";

import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { ITEM } from "../../../app/ItemTypes";
import {
	setIsDragItem,
	setInfoWidget,
} from "../../../app/slice/dashboardSlice";

const ListItemComponent = ({ id, primary }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [, drag] = useDrag({
		item: { id, type: ITEM },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		begin: () => {
			dragging(id);
		},
		end: () => {
			isDrop(id);
		},
	});

	const dragging = (id) => {
		let action = setIsDragItem(id);
		dispatch(action);
		action = setInfoWidget(id);
		dispatch(action);
	};

	const isDrop = (id) => {
		let action = setIsDragItem("");
		dispatch(action);
	};

	return (
		<ListItem className={classes.listItem} button id={id} ref={drag}>
			<ListItemText primary={primary} />
		</ListItem>
	);
};

export default ListItemComponent;
