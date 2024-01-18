import React from "react";
import Slider from "react-slick";
import SDCard from '../../Components/SDcomponents/SDCard'
import { SDprogramSonContainer,  ButtonSliderContainer } from "../../Styles/SDprogram.style";



const SDprogramSon = ({ items }) => {
  const settings = {
    className: "center",
    centerMode: false,
    arrows:false,
    fade:true,
    autoplay:true,
      dots: false,
      infinite: true,
      speed:1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
    };
  const arrowRefSDprogram = React.useRef(null);
  return (
      <SDprogramSonContainer>
        <Slider ref={arrowRefSDprogram} {...settings}>
          {items.map((item) => 
           <SDCard key={item.id} {...item} />
          )}
        </Slider>
      </SDprogramSonContainer>
  );
};

export default SDprogramSon;
