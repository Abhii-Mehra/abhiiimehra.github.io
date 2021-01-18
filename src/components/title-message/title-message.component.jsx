import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }

  @media(max-width: 768px){
    strong {
      font-size: 0.8em;
    }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 80;
    letter-spacing: 4px;

    .main {
      font-size: 40px;
    }

    .sub {
      font-size: 20px;
      letter-spacing: 2px;
    }
  }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Abhishek Mehra</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Mechanical Engineer", "Web Developer","3D Designer","UI/UX Designer","Learner"],
              autoStart: true,
              loop: true,
              delay: 40
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
