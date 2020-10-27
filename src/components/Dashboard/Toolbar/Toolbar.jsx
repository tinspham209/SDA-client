import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "./ToolbarSlice";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../app/ItemTypes";
import {
	CustomToolbar,
	CustomList,
	CustomListSubheader,
	CustomListItem,
	CustomListItemText,
	CustomCollapse,
} from "./Toolbar.elements";

import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { listItems } from "./Data";
const Toolbar = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.toolbar.isOpen);

	const handleClick = (object) => {
		const action = setIsOpen(object);
		dispatch(action);
	};

	const [, drag] = useDrag({
		item: { type: ItemTypes.ITEM },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

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
				{listItems.map((item) => (
					<div key={item.id}>
						<CustomListItem button onClick={() => handleClick(item.id)}>
							<CustomListItemText primary={item.name} />
							{isOpen[item.id] ? <MdExpandLess /> : <MdExpandMore />}
						</CustomListItem>
						<CustomCollapse in={isOpen[item.id]} timeout="auto" unmountOnExit>
							<CustomList component="div" disablePadding>
								{item.collapseItem.map((itemCollapse) => (
									<CustomListItem button key={itemCollapse.id} ref={drag}>
										<CustomListItemText
											primary={itemCollapse.name}
											id={itemCollapse.id}
										/>
									</CustomListItem>
								))}
							</CustomList>
						</CustomCollapse>
					</div>
				))}
			</CustomList>
		</CustomToolbar>
	);
};

export default Toolbar;
