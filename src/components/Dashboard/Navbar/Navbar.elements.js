import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
	background: rgb(51, 102, 204);
	height: 80px;
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled.div`
	height: 80px;
	width: 100%;
	max-width: 1500px;
	padding: 4px;

	display: flex;
	align-items: center;
`;

export const NavLogo = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-size: 2rem;

	display: flex;
	justify-self: flex-start;
	align-items: center;

	cursor: pointer;
`;

export const NavLogoImg = styled.img`
	height: 48px;
	border: 0;

	padding-right: 0;

	display: inline-block;
	vertical-align: middle;
`;

export const Icon = styled.span`
	margin-right: 5px;
`;

export const GroupButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 4px;
`;
