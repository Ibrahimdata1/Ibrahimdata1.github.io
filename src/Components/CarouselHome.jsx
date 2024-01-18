import React from "react";
import { AnimatePresence } from "framer-motion";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import {
  CarouselContainer,
  Left,
  Right,
  SlideDirection,
  Indicator,
  CarouselImgContent,
  CarouselHomeImg,
} from "../Styles/Carousel.style";

const CarouselHome = ({ carouselImages }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState("left");

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === carouselImages.length ? 0 : prevIndex + 1
    );
    setDirection("right");
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? carouselImages.length - 1 : prevIndex - 1
    );
    setDirection("left");
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setDirection(index > prevIndex ? "right" : "left");
  };
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.3,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };
  return (
      <CarouselContainer>
        <CarouselImgContent>
          <AnimatePresence>
            <CarouselHomeImg
              key={currentIndex}
              src={carouselImages[currentIndex]}
              variants={slideVariants}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
            />
          </AnimatePresence>
      
        <SlideDirection>
          <Left
            onClick={handlePrevious}
            variants={slideVariants}
            whileHover="hover"
          >
            <ArrowBackIosNewTwoToneIcon />
          </Left>
          <Right
            onClick={handleNext}
            variants={slideVariants}
            whileHover="hover"
          >
            <ArrowForwardIosTwoToneIcon />
          </Right>
        </SlideDirection>
        </CarouselImgContent>
        <Indicator>
          {carouselImages.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`dot${
                currentIndex === index ? " carouselDotActive" : ""
              }`}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              variants={dotsVariants}
            ></div>
          ))}
        </Indicator>
      </CarouselContainer>
  );
};

export default CarouselHome;
