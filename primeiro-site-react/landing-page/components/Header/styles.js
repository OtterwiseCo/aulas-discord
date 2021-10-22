import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background-image: url("assets/images/header-mobile.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 762px) {
    background-image: url("assets/images/header.jpg");
  }
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 6rem;
  font-size: 5rem;
  letter-spacing: 0.8rem;
  font-family: "Fraunces", serif;
`;
