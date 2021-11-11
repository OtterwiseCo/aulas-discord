import styled from "styled-components";

export const Background = styled.div`
  background-color: white;
  overflow: hidden;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 50%;
`;

export const Title = styled.h2`
  font-family: "Fraunces", serif;
  font-size: 3rem;
  font-weight: 900;
`;

export const Description = styled.p`
  font-family: "Barlow", serif;
  color: rgba(0, 0, 0, 0.6);
`;

export const Link = styled.a(
  (props) => `
  font-family: "Fraunces", serif;
  font-weight: 900;
  display: flex;
  align-self: baseline;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 5px;
    background-color: ${props.color};
  }
`,
);
