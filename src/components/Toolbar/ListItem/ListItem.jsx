import React from "react";

import { ListItem, ListItemText } from "@material-ui/core";

import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { ITEM } from "../../../app/ItemTypes";
import { setIsDragItem } from "../../../app/slice/dashboardSlice";

const ListItemComponent = ({ id, primary }) => {
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
		const action = setIsDragItem(id);
		dispatch(action);
	};

	const isDrop = (id) => {
		let action = setIsDragItem("");
		dispatch(action);
	};

	return (
		<ListItem button id={id} ref={drag}>
			<ListItemText primary={primary} />
		</ListItem>
	);
};

export default ListItemComponent;
