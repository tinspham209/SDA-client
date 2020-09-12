import React from "react";
import logoImg from "../../assets/img/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
	FooterContainer,
	LogoImg,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
} from "./Footer.elements";
const Footer = () => {
	return (
		<FooterContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/">
						<LogoImg src={logoImg} alt="logo" />
					</SocialLogo>
					<WebsiteRights>SDA-Team © 2020</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="/" target="_blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
