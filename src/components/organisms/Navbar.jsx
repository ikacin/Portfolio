import React, { useState } from "react";
import { Link } from "react-scroll";
import { IconArrowNarrowUp } from '@tabler/icons-react';
import styled from 'styled-components';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NavbarContainer>
            <div>
                <StyledLink to="home" spy={true} smooth={true} duration={500}>
                    ikacin
                </StyledLink>
            </div>
            <NavbarRightMenubar>
                {isMenuOpen ? (
                    <NavbarMenuOptions>
                        <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
                        <StyledLink
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            home
                        </StyledLink>
                        <StyledLink
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            about
                        </StyledLink>
                        <StyledLink
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            skills
                        </StyledLink>
                        <StyledLink
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            projects
                        </StyledLink>
                        <StyledLink
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            contact
                        </StyledLink>
                    </NavbarMenuOptions>
                ) : (
                    <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
                )}
            </NavbarRightMenubar>
            <NavbarRightOptions>
                <StyledLink to="home" spy={true} smooth={true} duration={500}>
                    home
                </StyledLink>
                <StyledLink to="about" spy={true} smooth={true} duration={500}>
                    about
                </StyledLink>
                <StyledLink to="skills" spy={true} smooth={true} duration={500}>
                    skills
                </StyledLink>
                <StyledLink to="projects" spy={true} smooth={true} duration={500}>
                    projects
                </StyledLink>
                <StyledLink to="contact" spy={true} smooth={true} duration={500}>
                    contact
                </StyledLink>
            </NavbarRightOptions>
        </NavbarContainer>
    );
};





const NavbarContainer = styled.div`
  color: white;
  width: 95vw;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  position: fixed;

  @media only screen and (max-width: 800px) {
    position: inherit !important;
    width: 100%;
  }
`;

const NavbarRightOptions = styled.div`
  color: var(--section-grey-color);
  width: 40%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    display: none !important;
  }

  a:hover {
    color: var(--section-color) !important;
  }
`;

export const NavbarRightMenubar = styled.div`
  display: none;

  @media only screen and (max-width: 800px) {
    display: block !important;
  }
`;

const NavbarMenuOptions = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 85vh;
  background-color: #121212;
  z-index: 1;

  svg {
    font-size: 3rem;
  }
`;

 const StyledLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;

const MenuIcon = styled(IconArrowNarrowUp)`
  cursor: pointer;
`;


export default Navbar;
