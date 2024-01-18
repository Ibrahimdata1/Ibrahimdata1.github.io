import SliderMom from "../Components/SliderGeneral/SliderMom";
import SliderData from "../Data/SlideData";
import BookData from "../Data/BookData";
import VideoPlayer from "../Components/VideoComponents/VideoPlayer";
import React from "react";
import Recommend from "../Data/Recommend";
import Tazkiyah from '../Data/Tazkiyah'
import Fiqh from '../Data/Fiqh'
import Aqeedah from "../Data/Aqeedah";

const Student = () => {
    const [showSlider,setShowSlider] = React.useState(false)
    setTimeout(()=>{
      setShowSlider(true);
    },1000);
    
  return (
    <div style={{backgroundColor:'#18150d'}}>
        <VideoPlayer/>
      {showSlider && (
      <div>
          <SliderMom title="Recommened" slidedata={Recommend}/>
          <SliderMom title="Tazkiyah" slidedata={Tazkiyah} />
          <SliderMom title="Aqeedah" slidedata={Aqeedah} />
          <SliderMom title="Fiqh" slidedata={Fiqh} />
      </div>
      )}
    </div>
  );
};

export default Student;
