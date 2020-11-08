import React from "react";

import { CustomListItem, CustomListItemText } from "./ListITem.elements";

import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";

import { ITEM } from "../../../../app/ItemTypes";
import { setIsDragItem } from "../../../../app/slice/ToolbarSlice";

const ListItem = ({ id, primary }) => {
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
		const action = setIsDragItem("");
		dispatch(action);
	};

	return (
		<CustomListItem button id={id} ref={drag}>
			<CustomListItemText primary={primary} />
		</CustomListItem>
	);
};

export default ListItem;
