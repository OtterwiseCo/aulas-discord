import styled from "styled-components";

export const Background = styled.div`
  background-color: white;
  overflow: hidden;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  @media (min-width: 1024px) {
    min-width: 50%;
    max-width: 50%;
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  font-family: "Fraunces", serif;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-top: 0;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Description = styled.p`
  font-family: "Barlow", serif;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  line-height: 2;
  font-size: 1.125rem;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Link = styled.a(
  (props) => `
  font-family: "Fraunces", serif;
  font-weight: 900;
  display: flex;
  align-self: center;
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

  @media (min-width: 1024px) {
    align-self: baseline;
  }
`,
);

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  @media (min-width: 1024px) {
    max-width: 450px;
  }
`;
