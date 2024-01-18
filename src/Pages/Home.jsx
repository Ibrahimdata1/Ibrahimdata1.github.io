import SliderMom from "../Components/SliderGeneral/SliderMom";
import HomeBG from "../Components/HomeBG";
import CarouselHome from "../Components/CarouselHome";
import Article from "../Components/Ariticle";
import styled from "styled-components";
import { css } from "styled-components";
import Recommend from "../Data/Recommend";
import Aqeedah from "../Data/Aqeedah";
import Tazkiyah from "../Data/Tazkiyah";
import PosterData2 from "../Data/PosterData2";
import PosterData1 from "../Data/PosterData1";
import Slider from "react-slick";

const ipad = (props) => {
  return css`
    @media only screen and (max-width: 1400px) {
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
    @media only screen and (max-width: 900px) {
      ${props}
    }
  `;
};
const Title = styled.h1`
  font-weight: 400;
  border-bottom: 2px solid #f4f5f6;
  color: #ffffff;
  margin-bottom: 15px;
  padding-left: 4rem;
  margin-top: 4rem;
  ${mobile({ display: "flex", justifyContent: "center", paddingLeft: "0" })}
`;
const Text = styled.p`
  padding: 10px 20px 0 20px;
`;
const CarouselHomelowDesktop = styled.div`
  display: block !important;
  ${ipad({ display: "none" })}
`;
const CarouselHomeMobile = styled.div`
  ${mobileBig({ display: "none" })}
`;
const Home = () => {
  const settings = {
    centerMode: false,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div style={{ backgroundColor: "#18150d" }}>
      <HomeBG />
      <Article />
        <SliderMom
          title="Student of Knowledge"
          slidedata={Recommend}
        />
        <SliderMom title="Tazkiyah" slidedata={Tazkiyah} />
        <SliderMom title="Aqeedah" slidedata={Aqeedah} />
      <Title>New Events</Title>
      <Text>
      Arabic With AMAU is a brand-new programme, designed from the ground up, to make learning the Arabic language as easy and efficient as possible.
This programme is ideally suited to those who want to learn Arabic on a part-time basis online. It is well suited to both adults and children. Previous experience of learning Arabic is not required. We even teach the Arabic alphabet for those who are not yet able to read. Don't worry if you have tried to learn Arabic before without success – our approach is considerably different to most other courses.
      </Text>
        <div style={{marginTop:'60px'}}>
          <Slider {...settings}>
                  <CarouselHome carouselImages={PosterData1} />
                  <CarouselHome carouselImages={PosterData2} />
          </Slider>
        </div>
    </div>
  );
};

export default Home;
