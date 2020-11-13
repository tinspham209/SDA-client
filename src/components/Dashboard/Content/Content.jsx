import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { ITEM, INDUSTRY_ITEM, AVG_HUMIDITY } from "../../../app/ItemTypes";
import { setItemIsSelect } from "../../../app/slice/ContentSlice";

import Diagram, { useSchema } from "beautiful-react-diagrams";
import "beautiful-react-diagrams/styles.css";

import { CustomContent } from "./Content.elements";
import CustomNode from "../CustomNode/CustomNode";
import TableTree from "../TableTree/TableTree";
import { listItems } from "../Toolbar/Data";
import { treeHumidity, treeIndustry } from "./Data";

const initialSchema = {
	nodes: [],
};

const Content = () => {
	const dispatch = useDispatch();

	const isDropItem = useSelector((state) => state.toolbar.isDragItem);

	const indexItemCollapse = useSelector(
		(state) => state.toolbar.indexItemCollapse
	);

	const [itemSelecting, setItemSelecting] = useState("");
	console.log("itemSelectingContent: ", itemSelecting);

	const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);

	// dnd from list to container
	const [, dropList] = useDrop({
		accept: ITEM,
		drop: (item, monitor) => {
			addNewNode(monitor.getClientOffset().x, monitor.getClientOffset().y);
			return undefined;
		},
	});

	// set render Node
	const setItemRenderInNode = (id) => {
		switch (id.split("-")[0]) {
			case INDUSTRY_ITEM:
				return (
					<TableTree
						treeItem={treeIndustry}
						setItemSelecting={setItemSelecting}
					/>
				);
			case AVG_HUMIDITY:
				return (
					<TableTree
						treeItem={treeHumidity}
						setItemSelecting={setItemSelecting}
					/>
				);
			default:
				return null;
		}
	};

	// get Header Name
	const setHeaderNameInNode = (id) => {
		const indexItem = id.split("-")[1];
		const indexItemCollapse = id.split("-")[2];
		const headerName =
			listItems[indexItem].collapseItem[indexItemCollapse].name;
		return headerName;
	};

	const setPort = (id) => {
		const indexItem = id.split("-")[1];
		const indexItemCollapse = id.split("-")[2];

		const input = listItems[indexItem].collapseItem[indexItemCollapse].input;
		const output = listItems[indexItem].collapseItem[indexItemCollapse].output;
		return [input, output];
	};

	const handleBtnOnClickInNode = (id) => {
		const action = setItemIsSelect(itemSelecting);
		dispatch(action);
	};

	const deleteNodeFromSchema = (id) => {
		const nodeToRemove = schema.nodes.find((node) => node.id === id);
		removeNode(nodeToRemove);
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
				renderNode: setItemRenderInNode,
				headerNode: setHeaderNameInNode,
				port: setPort,
				btnOnClick: handleBtnOnClickInNode,
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
