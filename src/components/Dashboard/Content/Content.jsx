import React from "react";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { ITEM, INDUSTRY_ITEM } from "../../../app/ItemTypes";

import Diagram, { useSchema } from "beautiful-react-diagrams";
import "beautiful-react-diagrams/styles.css";

import { CustomContent } from "./Content.elements";
import CustomNode from "../CustomNode/CustomNode";
import TableTree from "../TableTree/TableTree";
import { listItems } from "../Toolbar/Data";

const initialSchema = {
	nodes: [],
};

const Content = () => {
	const isDropItem = useSelector((state) => state.toolbar.isDragItem);
	const indexItemCollapse = useSelector(
		(state) => state.toolbar.indexItemCollapse
	);

	const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);

	// dnd from list to container
	const [, dropList] = useDrop({
		accept: ITEM,
		drop: (item, monitor) => {
			addNewNode(monitor.getClientOffset().x, monitor.getClientOffset().y);
			return undefined;
		},
	});

	const deleteNodeFromSchema = (id) => {
		const nodeToRemove = schema.nodes.find((node) => node.id === id);
		removeNode(nodeToRemove);
	};

	const setItemRenderNode = (id) => {
		// split from "industryItem-1" to "industry"
		switch (id.split("-")[0]) {
			case INDUSTRY_ITEM:
				return <TableTree />;
			default:
				return null;
		}
	};

	const getHeaderNode = (id) => {
		const indexItem = id.split("-")[1];
		const indexItemCollapse = id.split("-")[2];
		const headerName =
			listItems[indexItem].collapseItem[indexItemCollapse].name;
		return headerName;
	};

	// ID: idNode-indexItem-indexItemCollapse-randomNumber
	const addNewNode = (x, y) => {
		const nextNode = {
			//
			id: `${isDropItem}-${indexItemCollapse.item}-${
				indexItemCollapse.itemCollapse
			}-${schema.nodes.length + 1}`,
			coordinates: [x - 250, y - 70],
			render: CustomNode,
			data: {
				onClick: deleteNodeFromSchema,
				renderNode: setItemRenderNode,
				headerNode: getHeaderNode,
			},
			inputs: [{ id: `port-${Math.random()}` }],
			outputs: [{ id: `port-${Math.random()}` }],
		};
		addNode(nextNode);
	};

	return (
		<>
			<CustomContent ref={dropList}>
				<Diagram schema={schema} onChange={onChange} />
			</CustomContent>
		</>
	);
};

export default Content;
