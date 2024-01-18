import React from "react";
import Slider from "react-slick";
import SliderSonItem from "./SliderSonItem";
import {
  ButtonSliderContainer,
  SliderSonContainer,
} from "../../Styles/Slider.style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const SliderSon = ({ slidedata,changeVidUrl }) => {
  const settings = {
    centerMode: false,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const arrowRefSlider = React.useRef(null);
  return (
    <SliderSonContainer>
      <Slider ref={arrowRefSlider} {...settings}>

          {slidedata.map((item) => (
              <SliderSonItem key={item.id} item={item} changeVidUrl={changeVidUrl}/>
          ))}

      </Slider>
      <ButtonSliderContainer initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:3,delay:0.5}}>
        <button className="back" onClick={() => arrowRefSlider.current.slickPrev()}>
          <ArrowBackIosNewIcon />
        </button>
        <button className="next" onClick={() => arrowRefSlider.current.slickNext()}>
          <ArrowForwardIosIcon />
        </button>
      </ButtonSliderContainer>
    </SliderSonContainer>
  );
};

export default SliderSon;
