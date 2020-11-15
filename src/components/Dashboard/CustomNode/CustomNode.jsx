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
	BodyButton,
	CustomButton,
} from "./CustomNode.elements";

const CustomNode = ({ id, data, inputs, outputs }) => {
	const input = data.port(id)[0];
	const output = data.port(id)[1];
	const isButton = data.isBtn(id);

	return (
		<Node>
			<Header>
				<HeaderLeft />
				<HeaderCenter>
					<HeaderTitle>{data.headerNode(id)}</HeaderTitle>
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
			{isButton ? (
				<BodyButton>
					<CustomButton
						size="small"
						variant="contained"
						color="primary"
						onClick={() => data.btnOnClick(id)}
					>
						Run
					</CustomButton>
				</BodyButton>
			) : null}
			<Body>
				{data.renderNode(id)}
				{input ? (
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
				) : null}
				{output ? (
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
				) : null}
			</Body>
		</Node>
	);
};

export default CustomNode;
