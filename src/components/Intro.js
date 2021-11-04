import React from "react";
import styled from "styled-components";

const IntroSection = styled.section`
  padding:150px 40px 100px;
  background-position: top;
`;

const IntroContainer = styled.div`
  width: 100%;
  color: white;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const IntroTitle = styled.h1`
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
  margin: 0;
`;
const IntroText = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
`;

const SubmitInput = styled.button`
  display: inline-block;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 46px;
  padding: 10px 26px;
  border: none;
background: linear-gradient(to right, rgba(30,213,169,1) 0%, rgba(1,180,228,1) 100%);
  border-radius: 30px;
  position: absolute;
  top: 0;
  font: inherit;
  cursor: pointer;
  font-weight: 700;
  right: -40px;
  color: #fff;
`;

const IntroWelcome = styled.div`
  margin-bottom: 30px;
`;

const Intro = () => {
  return (
    <IntroSection className="intro">
      <IntroContainer className="intro-container container">
        <IntroWelcome>
          <IntroTitle>Добро пожаловать.</IntroTitle>
          <IntroText>
            Миллионы фильмов, сериалов и людей. Исследуйте сейчас.{" "}
          </IntroText>
        </IntroWelcome>
      </IntroContainer>
    </IntroSection>
  );
};

export default Intro;