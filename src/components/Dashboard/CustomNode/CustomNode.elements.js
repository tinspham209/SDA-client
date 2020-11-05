import styled from "styled-components";

export const Node = styled.div`
	width: 360px;
	height: 275px;
	border: 1px solid #000;
`;

export const Header = styled.div`
	width: 100%;
	height: 25px;
	background-color: #3366cc;
	display: flex;
	justify-content: space-between;
	padding: 2px 10px 2px 10px;
`;

export const HeaderSubTitle = styled.div``;

export const HeaderTitle = styled.p`
	font-size: 16px;
	color: white;
	font-weight: bold;
`;

export const HeaderIcon = styled.div`
	color: white;
`;

export const Body = styled.p`
	border: 1px solid red;
	margin: 15px;
`;

export const PortIn = styled.div`
	position: absolute;
	top: 50%;
	left: -8px;
`;

export const PortOut = styled.div`
	position: absolute;
	top: 50%;
	right: -8px;
`;
