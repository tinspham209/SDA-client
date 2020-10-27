import React from "react";
import { CustomContent } from "./Content.elements";

import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import "beautiful-react-diagrams/styles.css";
const initialSchema = createSchema({
	nodes: [
		{ id: "node-1", content: "Node 1", coordinates: [100, 200] },
		{ id: "node-2", content: "Node 2", coordinates: [250, 100] },
		{ id: "node-3", content: "Node 3", coordinates: [350, 320] },
		{ id: "node-4", content: "Node 4", coordinates: [250, 400] },
	],
	links: [
		{ input: "node-1", output: "node-2" },
		{ input: "node-1", output: "node-3" },
		{ input: "node-1", output: "node-4" },
	],
});

const Content = () => {
	const [schema, { onChange }] = useSchema(initialSchema);
	return (
		<>
			<CustomContent>
				<Diagram schema={schema} onChange={onChange} />
			</CustomContent>
		</>
	);
};

export default Content;
