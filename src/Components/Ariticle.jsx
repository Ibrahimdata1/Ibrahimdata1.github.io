import styled from "styled-components";
import {css} from 'styled-components'

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
const Artical = styled.div`
  display: flex;
  max-width: 100vw;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  background-color: #33333342;
  h1{
    font-weight: bold;
  }
  ${ipad({ flexDirection:'column',maxHeight:'none'})}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-left: 20px;
`
const Text = styled.h4`
  flex: 2;
  ${ipad({ marginTop:'0'})}
`
const ImageContainer = styled.div`
  flex: 1;
  width: 400px;
  height: 350px;
  margin-left: 80px;
  ${ipad({width:'100vw',height:'320px',width:'100%',marginLeft:'0' })}
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const ImageMobile = styled.div`
  ${desktop({display:'none' })}
`
const ImageDesktop = styled.div`
  ${ipad({display:'none' })}
`
const Ariticle = () => {

  return (
    <Artical>
      <ImageMobile>
        <ImageContainer><img src="/Images/articlepic.jpg"/></ImageContainer>
      </ImageMobile>
      <Content>
      <h1>Self-Development Program</h1>
        <Text>
          Due to the global transformation of technology in recent years, the
          challenges we deal with have changed drastically in comparison to a few
          decades ago. These challenges are constantly impacting education, the
          workplace and our home life. To cope with the increasing pace of
          modern-day life in the 21st century, you need to take a proactive
          approach in ensuring you are always developing yourself as a Muslim.
          Join our instructors on a wide-range of courses to become the best
          version of yourself, and in the process, get closer to the One who
          created you.
        </Text>
      </Content>
      <ImageDesktop>
        <ImageContainer><img src="/Images/articlepic.jpg"/></ImageContainer>
      </ImageDesktop>
    </Artical>
  );
};

export default Ariticle;
