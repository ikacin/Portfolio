import React, { useEffect, useRef } from "react";
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import Navbar from "../organisms/Navbar.jsx";
import Typed from "typed.js";
import styled from 'styled-components';


const HomePage = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["a frontend developer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <HomePageContainer>
            <HomePageHeader>
                <Navbar />
            </HomePageHeader>
            <HomePageMain>
                <div>
                    <span>hey,</span>
                    <p>
                        this is<NameSpan> İSMAİL</NameSpan>,
                    </p>
                </div>
                <span ref={el} />
            </HomePageMain>
            <HomePageFooter>
                <StyledLink
                    href="https://github.com/Vasu7389/react-project-ideas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconBrandGithub stroke={2} />
                </StyledLink>
                <StyledLink
                    href="https://www.linkedin.com/in/vasu-awasthi-9a820b137"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconBrandLinkedin stroke={2} />
                </StyledLink>
            </HomePageFooter>
        </HomePageContainer>
    );
};




const HomePageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HomePageHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

const HomePageMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 5.5rem;
  font-weight: 500;
  position: relative;
  line-height: 80px;
  letter-spacing: var(--heading-letter-spacing);

  > div > p > span {
    color: var(--section-color);
  }

  > div > span {
    line-height: 7rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 3.5rem !important;
    line-height: 3.3rem !important;
    font-weight: 500 !important;

    > div > span {
      line-height: 65px !important;
    }
  }
`;

const HomePageFooter = styled.div`
  width: 130px;
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 800px) {
    margin-bottom: 4.5rem !important;
  }
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const NameSpan = styled.span`
  color: var(--section-color);
`;








export default HomePage;
