import React from "react";
import { FaPlusCircle, FaSave, FaQuestionCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

import logoImg from "../../../assets/img/logo.png";

import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavLogoImg,
	Icon,
} from "./Navbar.elements";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

const Navbar = () => {
	const classes = useStyles();

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<NavLogoImg src={logoImg} alt="logo" />
						</NavLogo>
						<div className={classes.root}>
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
						</div>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
