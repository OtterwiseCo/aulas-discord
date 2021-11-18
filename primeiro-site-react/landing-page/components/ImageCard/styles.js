import styled from "styled-components";

export const Background = styled.div(
  ({ backgroundImage, minHeight = [], width = [] }) => `
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem;
    ${minHeight[0] ? `min-height: ${minHeight[0]};` : ""}
    ${width[0] ? `width: ${width[0]};` : ""}
    
    @media (min-width: 1024px) {
      ${minHeight[1] ? `min-height: ${minHeight[1]};` : ""}
      ${width[1] ? `width: ${width[1]};` : ""}
    }
  `,
);

export const Title = styled.h2(
  (props) => `
    font-family: "Fraunces", serif;
    font-weight: 900;
    color: ${props.color};
  `,
);

export const Description = styled.p(
  (props) => `
    font-family: "Barlow", serif;
    text-align: center;
    color: ${props.color};
    @media (min-width: 1024px) {
      padding: 0 7.5rem;
    }
  `,
);
