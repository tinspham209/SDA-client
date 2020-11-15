import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import { MdExpandLess, MdExpandMore, MdExitToApp } from "react-icons/md";
import TreeItem from "@material-ui/lab/TreeItem";
import { useDispatch } from "react-redux";
import { setItemIsSelect } from "../../../../app/slice/ContentSlice";

const useStyles = makeStyles({
	root: {
		height: 216,
		flexGrow: 1,
		maxWidth: 400,
	},
});
const TableTree = ({ treeItem, setItemSelecting }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState([]);
	const [selected, setSelected] = React.useState([]);

	const handleToggle = (event, nodeIds) => {
		setExpanded(nodeIds);
	};

	const handleSelect = (event, nodeIds) => {
		setSelected(nodeIds);
		const action = setItemIsSelect(nodeIds);
		dispatch(action);
	};

	return (
		<TreeView
			className={classes.root}
			defaultCollapseIcon={<MdExpandLess />}
			defaultExpandIcon={<MdExpandMore />}
			defaultEndIcon={<MdExitToApp />}
			expanded={expanded}
			selected={selected}
			onNodeToggle={handleToggle}
			onNodeSelect={handleSelect}
			multiSelect
		>
			{treeItem.data.map((item) => (
				<TreeItem nodeId={item.id} label={item.name} key={item.id}>
					{item.children
						? item.children.map((children) => (
								<TreeItem
									nodeId={children.id}
									label={children.name}
									key={children.id}
								/>
						  ))
						: null}
				</TreeItem>
			))}
		</TreeView>
	);
};

export default TableTree;
