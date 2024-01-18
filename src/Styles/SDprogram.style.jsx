import styled from "styled-components";
import {css} from 'styled-components'

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
export const SDprogramMomContent = styled.div`
    margin: 0 auto;
    padding: 0.8rem 0;
`;
export const SpaceMiddle = styled.div`
  margin-top: 50%;
`;
export const SDprogramSonContainer = styled.div`
    position: relative;
`;
export const SDprogramCardContainer = styled.div`
  height: 100vh;
    width:100vw;
    margin-top: 60px;
    padding: 0.3rem 0;
    border-radius: 5px; 
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`;
export const ButtonSliderContainer = styled.div`
    button{
        width: 2rem;
        height: 2rem;
        background-color: rgba(255,255,255,0.1);
        cursor: pointer;
        color: whitesmoke;
        border: none;
        top: 45%;
        right: 1rem;
        position: absolute;
    }
    .back{
        left: 1rem;
    }
`
export const SDButtonSliderContainer = styled.div`
    button{
        width: 2rem;
        height: 2rem;
        background-color: rgba(255,255,255,0.1);
        cursor: pointer;
        color: whitesmoke;
        border: none;
        position: absolute;
        top: 45%;
        right: -1rem;
    }
    .back{
        left: -1srem;
    }
`
export const SDprogramMomContainer = styled.div`
    
`
export const SDplaylistContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const SDTitle = styled.h5`
  border-bottom: 2px solid #F4F5F6;
  color: #ff6b00ff;
  font-weight: bold;
  margin-bottom: 20px;
`
export const SDplaylistContainer = styled.div`
position: relative;
`
export const BackgroundContainer = styled.div`
    display: flex;
    margin-top: 70px;
    padding-top: 20px;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: brightness(80%);
    }
    ${mobile({ height:'20vh',marginTop:'80px',marginBottom:'20px'})}
`