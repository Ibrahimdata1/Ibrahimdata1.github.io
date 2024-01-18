
import {
  BackgroundContainer,
  BackgroundContent,
  Title,
  Text,
  Button,
} from "../Styles/HomeBG.style";

const HomeBG = () => {
  return (
    <BackgroundContainer>
      <BackgroundContent>
        <Title>الدين الاسلامي</Title>
        <Text> 
          Get ready to level up yourself to study
          Arabic <br/>& Improve knowledge of the religion
        </Text>
        <Button as='a' href="/student">Start</Button>
      </BackgroundContent>
    </BackgroundContainer>
  );
};

export default HomeBG;
