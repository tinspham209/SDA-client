import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../app/ItemTypes";

import Diagram, { useSchema } from "beautiful-react-diagrams";
import "beautiful-react-diagrams/styles.css";

import { CustomContent } from "./Content.elements";
import { Button } from "../../../GlobalStyles";

const initialSchema = {
	nodes: [],
};

const CustomRender = ({ id, content, data, inputs, outputs }) => (
	<div style={{ background: "purple" }}>
		<div style={{ textAlign: "right" }}>
			<Button onClick={() => data.onClick(id)}>x </Button>
		</div>
		<div role="button" style={{ padding: "15px" }}>
			{content}
		</div>
		<div
			style={{
				marginTop: "10px",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			{inputs.map((port) =>
				React.cloneElement(port, {
					style: { width: "25px", height: "25px", background: "#1B263B" },
				})
			)}
			{outputs.map((port) =>
				React.cloneElement(port, {
					style: { width: "25px", height: "25px", background: "#1B263B" },
				})
			)}
		</div>
	</div>
);

const Content = () => {
	const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);

	// dnd from list to container
	const [, dropList] = useDrop({
		accept: ItemTypes.ITEM,
		drop: (item, monitor) => {
			addNewNode(monitor.getClientOffset().x, monitor.getClientOffset().y);
			return undefined;
		},
	});

	const deleteNodeFromSchema = (id) => {
		const nodeToRemove = schema.nodes.find((node) => node.id === id);
		removeNode(nodeToRemove);
	};

	const addNewNode = (x, y) => {
		const nextNode = {
			id: `node-${schema.nodes.length + 1}`,
			content: `Node ${schema.nodes.length + 1}`,
			coordinates: [x - 250, y - 70],
			render: CustomRender,
			data: { onClick: deleteNodeFromSchema },
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
