import React from "react";
import { CustomContent } from "./Content.elements";

import Diagram, { useSchema } from "beautiful-react-diagrams";
import "beautiful-react-diagrams/styles.css";

const initialSchema = {
	nodes: [
		{
			id: "node-1",
			content: "Start",
			coordinates: [100, 150],
			outputs: [{ id: "port-1", alignment: "right" }],
			data: {
				foo: "bar",
				count: 0,
			},
		},
		{
			id: "node-2",
			content: "Middle",
			coordinates: [300, 150],
			inputs: [{ id: "port-3", alignment: "left" }],
			outputs: [{ id: "port-5", alignment: "right" }],
			data: {
				bar: "foo",
			},
		},
		{
			id: "node-3",
			content: "End",
			coordinates: [600, 150],
			inputs: [{ id: "port-7", alignment: "left" }],
			data: {
				foo: true,
				bar: false,
				some: {
					deep: {
						object: true,
					},
				},
			},
		},
	],
	links: [{ input: "port-1", output: "port-3" }],
};

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
