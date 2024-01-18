import styled from "styled-components";
import {css} from 'styled-components'
import {motion} from 'framer-motion'

export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 993px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
export const LogoMobile = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  background: transparent;
  ${desktop({ display:'none'})}
`
export const SideBarContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #100C08;
  color: white;
  flex: 1;
  padding-bottom: 1.5rem;
  padding-left: 20px;
  z-index: 100;
  ${ipad({ display: "none" })}
`;
export const LogoContainer = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  @media (max-width: 1600px) {
    margin-bottom: 2rem;
  }
`;
export const SubSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const SubSideBarTitle = styled.h6`
  text-align: center;
  font-weight: normal;
  font-size: 22px;
  margin: 0 0 10px 0;
  padding-bottom: 5px;
  border-bottom: 2px solid gray;
  width: 80%;
`;
export const SubSideBarLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
`
export const SubSideBarInput = styled.input`
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked ~span{
        background-color: #2196f3;
    }
    &:checked ~span::after{
        display: block;
    }
    &:hover{
        background-color: #ccc;
    }
`
export const SubSideBarSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
    &:hover{
        background-color: #ccc;
    }
    &::after{
        top: 6.4px;
        left: 6.4px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: white;
        display: none;
        position: absolute;
        content: '';
    }
`
export const SubSideBarLabelContainer = styled.div`
  margin-top: 15px;
`;
