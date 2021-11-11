import styled from "styled-components";

export const Background = styled.div(
  (props) => `
    background-image: url(${props.backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem;
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
    padding: 0 7.5rem;
    text-align: center;
    color: ${props.color};
  `,
);
