import React from "react";
import styled from "styled-components";

const SkillPage = () => {
    return (
        <SkillContainer>
            <SkillLeft>
                <SkillHeader>
                    <span>ski</span>lls
                </SkillHeader>
                <p>
                    It is possible to fly without motors, but not without knowledge and
                    skill.
                </p>
            </SkillLeft>
            <SkillRight>
                <div id="myCanvasContainer">
                    <canvas width="600" height="600" id="myCanvas"></canvas>
                </div>
                <TagsContainer id="tags">
                    <ul>
                        <li>
                            <a href="/skills">javascript</a>
                        </li>
                        <li>
                            <a href="/skills">react</a>
                        </li>
                        <li>
                            <a href="/skills">html</a>
                        </li>
                        <li>
                            <a href="/skills">css</a>
                        </li>
                        <li>
                            <a href="/skills">redux</a>
                        </li>
                        <li>
                            <a href="/skills">github</a>
                        </li>
                        <li>
                            <a href="/skills">vite</a>
                        </li>
                        <li>
                            <a href="/skills">CI/CD</a>
                        </li>
                        <li>
                            <a href="/skills">website</a>
                        </li>
                        <li>
                            <a href="/skills">typescript</a>
                        </li>
                        <li>
                            <a href="/skills">jest</a>
                        </li>
                        <li>
                            <a href="/skills">javascript</a>
                        </li>
                        <li>
                            <a href="/skills">react-routing</a>
                        </li>
                        <li>
                            <a href="/skills">react</a>
                        </li>
                        <li>
                            <a href="/skills">es7+</a>
                        </li>
                        <li>
                            <a href="/skills">javascript</a>
                        </li>
                        <li>
                            <a href="/skills">react</a>
                        </li>
                        <li>
                            <a href="/skills">html</a>
                        </li>
                        <li>
                            <a href="/skills">css</a>
                        </li>
                        <li>
                            <a href="/skills">redux</a>
                        </li>
                        <li>
                            <a href="/skills">github</a>
                        </li>
                        <li>
                            <a href="/skills">vite</a>
                        </li>
                        <li>
                            <a href="/skills">website</a>
                        </li>
                        <li>
                            <a href="/skills">CI/CD</a>
                        </li>
                        <li>
                            <a href="/skills">jest</a>
                        </li>
                        <li>
                            <a href="/skills">javascript</a>
                        </li>
                        <li>
                            <a href="/skills">react</a>
                        </li>
                        <li>
                            <a href="/skills">typescript</a>
                        </li>
                    </ul>
                </TagsContainer>
            </SkillRight>
        </SkillContainer>
    );
};

export default SkillPage;

const SkillContainer = styled.div`
  color: white;
  display: flex;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const SkillHeader = styled.div`
  font-size: var(--section-heading-size);
  margin-bottom: 30px;
  letter-spacing: var(--heading-letter-spacing);

  > span {
    color: var(--section-color);
  }

  @media only screen and (max-width: 800px) {
    font-size: var(--section-heading-size-mobile) !important;
  }
`;

const SkillLeft = styled.div`
  width: 50%;
  font-size: var(--section-sub-heading-size) !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (max-width: 800px) {
    width: 100% !important;
  }

  p {
    margin-bottom: 50px;
  }
`;

const SkillRight = styled.div`
  opacity: 0.8;
  color: white;
  width: 40%;

  @media only screen and (max-width: 800px) {
    width: 100% !important;
  }
`;


const TagsContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 5px 0;
    a {
      text-decoration: none;
      color: white;

      &:hover {
        color: var(--section-color);
      }
    }
  }
`;
