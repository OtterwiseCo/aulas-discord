import styled from "styled-components";

export const MenuMobile = styled.div`
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #3dbeff;
`;

export const MenuMobileContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 45px;
  top: 30px;
  color: white;
  font-size: 1.5rem;
`;

export const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const MenuHamburger = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
`;

export const Link = styled.a`
  color: #ffffffd1;
  text-decoration: none;
  margin: 20px;
  font-weight: 700;
  font-size: 14px;
`;

export const ContactButton = styled.button`
  color: black;
  background-color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  font-family: "Fraunces", serif;
  text-transform: uppercase;
  margin-left: 20px;
`;
