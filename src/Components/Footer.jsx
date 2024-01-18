import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment,
} from "../Styles/Footer.style";
import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import {
  FacebookSharp,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <ImportContactsSharpIcon
            fontSize="large"
            style={{ display: "flex", alignItems: "start" }}
          />
        </Logo>
        <Desc>
          The best books in explanation by Ulama. Books contain good resource to
          study. It's so valuable Do Not Miss IT!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5959">
            <FacebookSharp />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACCE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Address</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Watchlist</ListItem>
          <ListItem>Sociak</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          241 Ladprao, Bangkok 10230
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 5678
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@bookstore.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
