import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { AiFillCloseCircle } from "react-icons/ai";

import TableTree from "../TableTree/TableTree";

import {
	Body,
	Header,
	HeaderSubTitle,
	HeaderIcon,
	HeaderTitle,
	Node,
	PortIn,
	PortOut,
} from "./CustomNode.elements";

const CustomNode = ({ id, data, inputs, outputs }) => (
	<Node>
		<Header>
			<HeaderSubTitle> </HeaderSubTitle>
			<HeaderTitle>Industry Production</HeaderTitle>
			<HeaderIcon>
				<IconButton
					aria-label="delete"
					size="small"
					edge="false"
					color="inherit"
					onClick={() => data.onClick(id)}
				>
					<AiFillCloseCircle />
				</IconButton>
			</HeaderIcon>
		</Header>
		<Body>
			<TableTree />
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

export default CustomNode;
