import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import { MdExpandLess, MdExpandMore, MdExitToApp } from "react-icons/md";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
	root: {
		height: 216,
		flexGrow: 1,
		maxWidth: 400,
	},
});
const TableTree = ({ treeItem }) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState([]);
	const [selected, setSelected] = React.useState([]);

	const handleToggle = (event, nodeIds) => {
		setExpanded(nodeIds);
	};

	const handleSelect = (event, nodeIds) => {
		setSelected(nodeIds);
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
		>
			<TreeItem nodeId="1" label="Industry">
				<TreeItem nodeId="2" label="2012" />
				<TreeItem nodeId="3" label="2013" />
				<TreeItem nodeId="4" label="2014" />
				<TreeItem nodeId="5" label="2015" />
				<TreeItem nodeId="6" label="2016" />
				<TreeItem nodeId="7" label="2017" />
				<TreeItem nodeId="8" label="2018" />
				<TreeItem nodeId="9" label="2019" />
			</TreeItem>
		</TreeView>
	);
};

export default TableTree;
