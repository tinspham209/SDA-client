import React from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
	ITEM,
	INDUSTRY_ITEM,
	AVG_HUMIDITY,
	LINE_CHART,
	COLUMN_CHART,
	MAPS_VIZ,
} from "../../../app/ItemTypes";
import {
	setItemIsSelect,
	fetchDataHumidity,
} from "../../../app/slice/ContentSlice";

import Diagram, { useSchema } from "beautiful-react-diagrams";
import "beautiful-react-diagrams/styles.css";

import { CustomContent } from "./Content.elements";
import CustomNode from "../CustomNode/CustomNode";
import {
	ColumnChart,
	LineChart,
	Maps,
	TableTree,
} from "../Visualization/index";
import { listItems, treeHumidity, treeIndustry } from "../../../data";

const initialSchema = {
	nodes: [],
};

const Content = () => {
	const isDropItem = useSelector((state) => state.toolbar.isDragItem);
	const itemIsSelect = useSelector((state) => state.content.itemIsSelect);

	const dispatch = useDispatch();

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

	// set render Node
	const setItemRenderInNode = (id) => {
		switch (id.split("-")[0]) {
			case INDUSTRY_ITEM:
				return <TableTree treeItem={treeIndustry} />;
			case AVG_HUMIDITY:
				return <TableTree treeItem={treeHumidity} />;
			case LINE_CHART:
				return <LineChart />;
			case COLUMN_CHART:
				return <ColumnChart />;
			case MAPS_VIZ:
				return <Maps />;
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

	// set button is in Node
	const setButtonInNode = (id) => {
		const indexItem = id.split("-")[1];
		const indexItemCollapse = id.split("-")[2];
		const button = listItems[indexItem].collapseItem[indexItemCollapse].button;
		return button;
	};

	const handleBtnOnClickInNode = (id) => {
		let action;
		action = fetchDataHumidity(itemIsSelect);

		// action = setItemIsSelect([]);
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
			coordinates: [x - 250, y - 80],
			render: CustomNode,
			data: {
				onClick: deleteNodeFromSchema,
				renderNode: setItemRenderInNode,
				headerNode: setHeaderNameInNode,
				port: setPort,
				btnOnClick: handleBtnOnClickInNode,
				isBtn: setButtonInNode,
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
