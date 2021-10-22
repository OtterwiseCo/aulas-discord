import React from "react";
import styled from "styled-components";

function ServiceDescription(props) {
  return (
    <Background>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <a>LEARN MORE</a>
    </Background>
  );
}

const Background = styled.div`
  background-color: hsl(51, 100%, 49%, 0.12);
  overflow: hidden;
  padding: 5rem;
`;

const Title = styled.h2`
  font-family: "Barlow", serif;
  font-size: 3rem;
  font-weight: 900;
`;

const Description = styled.p`
  font-family: "Barlow", serif;
`;

export default ServiceDescription;
