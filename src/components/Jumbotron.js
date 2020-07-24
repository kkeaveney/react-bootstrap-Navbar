import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import roadwayImage from "../assets/silver-iphone.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${roadwayImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    psotion: relative;
    z-index: -2;
  }
  .overlay {
    background-size: #000;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Master blockchain development</p>
      </Container>
    </Jumbo>
  </Styles>
);
