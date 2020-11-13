import React from "react";

import { CustomListItem, CustomListItemText } from "./ListITem.elements";

import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";

import { ITEM } from "../../../../app/ItemTypes";
import {
	setIsDragItem,
	setIndexItem,
	setIndexItemCollapse,
} from "../../../../app/slice/ToolbarSlice";

const ListItem = ({ id, primary, indexItem, indexItemCollapse }) => {
	const dispatch = useDispatch();

	const [, drag] = useDrag({
		item: { id, type: ITEM },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		begin: () => {
			dragging(id);
			setIndex(indexItem);
			setIndexCollapse(indexItemCollapse);
		},
		end: () => {
			isDrop(id);
		},
	});

	const dragging = (id) => {
		const action = setIsDragItem(id);
		dispatch(action);
	};

	const setIndex = (indexItem) => {
		const action = setIndexItem(indexItem);
		dispatch(action);
	};

	const setIndexCollapse = (indexItemCollapse) => {
		const action = setIndexItemCollapse(indexItemCollapse);
		dispatch(action);
	};

	const isDrop = (id) => {
		let action = setIsDragItem("");
		dispatch(action);
		action = setIndexItem("");
		dispatch(action);
		action = setIndexItemCollapse("");
		dispatch(action);
	};

	return (
		<CustomListItem button id={id} ref={drag}>
			<CustomListItemText primary={primary} />
		</CustomListItem>
	);
};

export default ListItem;
