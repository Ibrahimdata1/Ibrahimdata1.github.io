import styled from "styled-components";
import { Button } from "@mui/material";
import { css } from "styled-components";
import {motion} from 'framer-motion';

const ipad = (props) => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${props}
    }
  `;
};
const desktop = (props) => {
  return css`
    @media only screen and (min-width: 1100px) {
      ${props}
    }
  `;
};
const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
const mobileBig = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 0 0;
  justify-content: center;
  flex: 4;
  ${ipad({ justifyContent: "space-around"})};
`;
export const CardContent = styled(motion.div)`
  margin: 15px 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  ${mobile({width:'100%'})};
  ${mobileBig({width:'40%'})};
  ${ipad({ margin:'0 20px',marginBottom:'20px',width:'40%' })};
`;
export const CardIMG = styled.img`
  max-width: 350px;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 0.3rem;
  border-radius: 5px;
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  height: 250px;
  border-radius: 5px;
  ${ipad({ width: "30vw" })}
  ${mobileBig({width:'40vw'})};
  ${mobile({ width: "60vw" })}
`;
export const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0;
`;
export const CardPrice = styled.div`
  padding-bottom: 15px;
`;
export const CardTitleArab = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@600&family=IBM+Plex+Sans+Arabic:wght@100&family=Montserrat:ital,wght@0,100;0,400;1,200&family=Noto+Sans+Arabic:wght@100&display=swap');
  max-width: 12rem;
  text-align: left;
  margin-bottom: 0.5rem;
`;
export const ButtonDesktop = styled.div`
  ${ipad({ display:'none' })}
`
export const ButtonIpad = styled.div`
  ${desktop({ display:'none' })};
`
export const ButtonItem = styled(Button)`
  width: 100%;
  flex: 1;
  cursor: pointer;
  ${ipad({ width: "18vw"})}
  ${mobileBig({width:'30vw'})};
  ${mobile({ width:'50vw' })};
`;
