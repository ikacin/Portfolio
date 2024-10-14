import { useEffect, useState, useCallback } from "react";
import { IconArrowNarrowUp } from '@tabler/icons-react';
import styled, { keyframes } from 'styled-components';
import AboutPage from '../src/components/pages/AboutPage.jsx';
import HomePage from '../src/components/pages/HomePage.jsx';
import ProjectPage from '../src/components/pages/ProjectPage.jsx';
import SkillPage from '../src/components/pages/SkillPage.jsx';
import EducationPage from '../src/components/pages/EducationPage.jsx';


export default function App() {

    const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

    const toggleVisible = useCallback(() => {
        const scrolled = document.documentElement.scrollTop;
        setShowBackToTopBtn(scrolled > 500);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, [toggleVisible]);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <div className="app-section" id="home">
                <HomePage />
            </div>
            <div className="app-section" id="about">
                <AboutPage />
            </div>
            <div className="app-section" id="skills">
                <SkillPage />
            </div>
            <div className="app-section" id="projects">
                <ProjectPage />
            </div>
            <div className="app-section">
                <EducationPage />
            </div>
            <div className="app-section-contact" id="contact">
            </div>
            {showBackToTopBtn && (
                <BackToTopButton onClick={scrollToTop}>
                    <IconArrowNarrowUp />
                </BackToTopButton>
            )}
        </>
    );
}


const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px); 
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
`;

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: #1c7ed6; 
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  animation: ${fadeInUp} 0.4s ease; 
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #1971c2; 
  }
`;