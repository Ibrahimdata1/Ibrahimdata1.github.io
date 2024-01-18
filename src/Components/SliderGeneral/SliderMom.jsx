import {
  SliderMomContainer,
  SliderMomContent,
  Title,
} from "../../Styles/Slider.style";
import SliderSon from "./SliderSon";


const SliderMom = ({ title, slidedata}) => {
  return (
    <SliderMomContainer initial={{x:'95vw',opacity:0}}
    whileInView={{x:0,opacity:1,transition:{type:'spring',duration:3}}} viewport={{ once: true }}>
      <SliderMomContent>
        <Title>{title}</Title>
        <SliderSon slidedata={slidedata}/>
      </SliderMomContent>
    </SliderMomContainer>
  );
};

export default SliderMom;
