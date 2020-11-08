import React from "react";
import { CustomListItem, CustomListItemText } from "../Toolbar.elements";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../../app/ItemTypes";

const ListItem = ({ id, primary }) => {
	const [, drag] = useDrag({
		item: { type: ItemTypes.ITEM },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	return (
		<CustomListItem button id={id} ref={drag}>
			<CustomListItemText primary={primary} />
		</CustomListItem>
	);
};

export default ListItem;
