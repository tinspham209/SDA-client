import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { AiFillCloseCircle } from "react-icons/ai";

import {
	Body,
	Header,
	HeaderLeft,
	HeaderCenter,
	HeaderRight,
	HeaderTitle,
	Node,
	PortIn,
	PortOut,
} from "./CustomNode.elements";

const CustomNode = ({ id, data, inputs, outputs }) => {
	return (
		<Node>
			<Header>
				<HeaderLeft />
				<HeaderCenter>
					<HeaderTitle>Industry Production</HeaderTitle>
				</HeaderCenter>
				<HeaderRight>
					<IconButton
						aria-label="delete"
						size="small"
						color="inherit"
						onClick={() => data.onClick(id)}
					>
						<AiFillCloseCircle />
					</IconButton>
				</HeaderRight>
			</Header>
			<Body>
				{data.renderNode(id)}
				<PortIn>
					{inputs.map((port) =>
						React.cloneElement(port, {
							style: {
								width: "15px",
								height: "15px",
								background: "#1B263B",
								borderRadius: "50%",
							},
						})
					)}
				</PortIn>
				<PortOut>
					{outputs.map((port) =>
						React.cloneElement(port, {
							style: {
								width: "15px",
								height: "15px",
								background: "#1B263B",
								borderRadius: "50%",
							},
						})
					)}
				</PortOut>
			</Body>
		</Node>
	);
};

export default CustomNode;
