import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components";

export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 620px) {
      ${props}
    }
  `;
};
export const smallMobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};

export const mobileBig = (props) => {
  return css`
    @media only screen and (max-width: 960px) {
      ${props}
    }
  `;
};
export const CarouselContainer = styled.div`
    padding-bottom: 20px;
`;
export const CarouselImgContent = styled.div`
  position: relative;
  border-radius: 10px;
  max-width: 50vw;
  height:60vh;
  margin: auto;
  overflow: hidden;
  ${ipad({height:'50vh'})}
  ${mobileBig({maxWidth:'90vw',height:'40vh'})}
  ${mobile({maxWidth:'90vw',height:'50vh'})}
  ${smallMobile({maxWidth:'90vw',height:'35vh'})}
`;
export const CarouselHomeImg = styled(motion.img)`
  width: 99%;
  height: 99%;
  border-radius: 8px;
  border: 1px solid #010b13;
  object-fit: fill;
`;
export const SlideDirection = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Left = styled(motion.div)`
  background-color: #fb666675;
  color: #fff;
  padding: 10px 8px 8px 13px;
  margin: 0 20px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 10px;
  height: 25px;
  width: 25px;
  left: 0;
  cursor: pointer;
`;
export const Right = styled(motion.div)`
  background-color: #fb666675;
  color: #fff;
  padding: 10px 8px 8px 13px;
  margin: 0 20px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 10px;
  height: 25px;
  width: 25px;
  right: 0;
  cursor: pointer;
`;
export const Indicator = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
`;
