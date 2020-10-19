import React from "react";
import { FaPlusCircle, FaSave, FaQuestionCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import logoImg from "../../../assets/img/logo.png";

import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavLogoImg,
	Icon,
	GroupButton,
	GridContainer,
} from "./Navbar.elements";

const Navbar = () => {
	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavbarContainer>
						<GridContainer container spacing={1}>
							<GridContainer item xs={2}>
								<NavLogo to="/">
									<NavLogoImg src={logoImg} alt="logo" />
								</NavLogo>
							</GridContainer>
							<GridContainer item xs={8}>
								<GroupButton>
									<ButtonGroup
										variant="contained"
										color="primary"
										aria-label="contained primary button group"
									>
										<Button>
											{" "}
											<Icon>
												<FaPlusCircle />
											</Icon>{" "}
											New
										</Button>
										<Button>
											{" "}
											<Icon>
												<FaSave />
											</Icon>{" "}
											Save
										</Button>
										<Button>
											{" "}
											<Icon>
												<FaQuestionCircle />
											</Icon>{" "}
											Help
										</Button>
										<Button>Example 1</Button>
										<Button>Example 2</Button>
										<Button>Example 3</Button>
									</ButtonGroup>
								</GroupButton>
							</GridContainer>
						</GridContainer>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
