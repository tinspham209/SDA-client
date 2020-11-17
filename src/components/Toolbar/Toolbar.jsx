import React from "react";

import { useStyles } from "./Toolbar.elements";

import {
	ListSubheader,
	List,
	ListItem,
	ListItemText,
	Collapse,
} from "@material-ui/core";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { setToolbarIsOpen } from "../../app/slice/dashboardSlice";

import ListItemComponent from "./ListItem/ListItem";

const Toolbar = ({ listItems }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.dashboard.toolbar.isOpen);

	const handleClick = (object) => {
		const action = setToolbarIsOpen(object);
		dispatch(action);
	};

	return (
		<div className={classes.toolbar}>
			<List
				component="nav"
				aria-labelledby="nested-list"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Widgets
					</ListSubheader>
				}
			>
				{listItems.map((item) => (
					<div key={item.id}>
						<ListItem button onClick={() => handleClick(item.id)}>
							<ListItemText primary={item.name} />
							{isOpen[item.id] ? <MdExpandLess /> : <MdExpandMore />}
						</ListItem>
						<Collapse
							className={classes.collapse}
							in={isOpen[item.id]}
							timeout="auto"
							unmountOnExit
						>
							<List component="div" disablePadding>
								{item.collapseItem.map((itemCollapse) => (
									<ListItemComponent
										key={itemCollapse.id}
										primary={itemCollapse.name}
										id={itemCollapse.id}
									/>
								))}
							</List>
						</Collapse>
					</div>
				))}
			</List>
		</div>
	);
};

export default Toolbar;
