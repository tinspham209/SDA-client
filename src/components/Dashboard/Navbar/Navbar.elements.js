import styled from "styled-components";
import { Container } from "../../../GlobalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
	background: #101522;
	height: 80px;
	font-size: 1.2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	height: 80px;

	${Container}
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
	height: 40px;
	border: 0;

	padding-right: 0;

	display: inline-block;
	vertical-align: middle;
`;

export const Icon = styled.span`
	margin-right: 5px;
`;