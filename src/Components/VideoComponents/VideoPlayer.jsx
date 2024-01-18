import styled from "styled-components";
import { css } from "styled-components";
import { VideoPlayerContainer } from "../../Styles/Video.style";
import React from "react";
import { Container } from "@mui/material";
import { CartContext } from '../Context'

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
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
const VideoContentMobile = styled.div`
  ${desktop({ display: "none" })}
  ${ipad({ display: "none" })}
  ${mobile({ display: "block" })}
`;
const VideoContentDesktop = styled.div`
  ${mobile({ display: "none" })}
  ${ipad({ display: "none" })}
`;
const VideoContentIpad = styled(Container)`
height: 500px;
${ipad({ height:'450px' })}
  ${mobile({ height:'300px'})}
`;

const VideoPlayer = () => {
  const {urlVid} = React.useContext(CartContext)
  React.useEffect(()=>{
    console.log(urlVid)
  },[])
  return (
    <VideoPlayerContainer>
      <VideoContentIpad maxWidth='md'>
        <iframe src={urlVid} width={'100%'} height={'100%'} allow="fullscreen" ></iframe>
      </VideoContentIpad>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
