import styled from "styled-components";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

export const NavbarContainer = styled.nav`
  z-index: 1000;
  width: 100%;
  position: fixed;
  top: 0;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #1f1008;
  display: flex;
  flex-direction: column;

  @media (min-width: 760px) {
    height: 80px;
  }
`;
export const LeftBrandLogo = styled.div`
  flex: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const LeftContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;
export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
`;
export const IconTab  = styled.div`
  @media (max-width: 925px) {
    display: none;
  }
`
export const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  text-decoration: none;
  margin: 10px;
  padding-bottom: 5px;
  &:hover{
    filter: brightness(80%);
  }
  
  @media (max-width: 925px) {
    display: none;
  }
`;
export const NavbarLinkExtend = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
`;
export const Logo = styled(motion.div)`
  margin: 10px 10px 10px 60px;
  max-width: 180px;
  height: auto;
  @media (max-width: 925px) {
    display: none;
  }
`;
export const OpenLinksButton = styled.button`
  display: flex;
  align-items: center;
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 925px) {
    display: none;
  }
`;
export const NavbarExtendedContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 760px) {
    display: none;
  }
`;
export const HoverSpace = styled.span`

`
export const menuBar = styled.div`
  display: hidden;
  @media (min-width: 925px) {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 10px;
  }
`
