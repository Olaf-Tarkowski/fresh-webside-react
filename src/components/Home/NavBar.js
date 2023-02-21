import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import freshLogo from "../../resources/icons/Logo.svg";
import video from "../../resources/images/Video.png";
import play from "../../resources/icons/Play.svg";
import line from "../../resources/icons/Line.svg";
import orange from "../../resources/icons/Orange.svg";
import smallDonut from "../../resources/icons/SmallDonut.svg";
import blue from "../../resources/icons/Blue.svg";

const Background = styled.div`
  background-color: #312477;
  height: 571px;

  @media (min-width: 576px) {
    height: 544px;
  }
  @media (min-width: 768px) {
    height: 574px;
  }
  @media (min-width: 992px) {
    height: 644px;
  }
  @media (min-width: 1400px) {
    height: 700px;
  }
  @media (min-width: 1600px) {
    height: 820px;
  }
`;

const CustomContainer = styled(Container)`
  max-width: 2400px;
`;

const ContentContainer = styled.div`
  padding-top: 36px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1562px;
  font-weight: 200;
  font-size: 17px;
  color: #fff;
`;

const SmallSection = styled.section`
  display: flex;
  align-items: center;
`;

const Svg = styled.img``;

const CompanyName = styled.p`
  margin: 0px;
  padding-left: 12.5px;
  font-size: 19px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.57px;
`;

const Nav = styled.nav`
  padding: 0;

  @media (min-width: 768px) {
    padding: 0 57px;
  }
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledLink = styled.li`
  padding: 5px 31px;
  transition: 0.9s;
  :hover {
    transform: scale(1.09);
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 0;
  width: 228px;
  height: 60px;
  background-color: #61ddfe;
  font-size: 17px;
  color: #312477;
  border: none;
  border-radius: 30px;
  transition: 0.9s;
  :hover {
    transform: scale(1.09);
    cursor: pointer;
  }
`;

const Section = styled.section`
  padding-top: 95px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
`;

const SmallContainer = styled.div`
  position: relative;
  padding: 16px 0 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media (min-width: 576px) {
    width: 480px;
  }
  @media (min-width: 768px) {
    width: 580px;
  }
  @media (min-width: 992px) {
    width: 800px;
  }
  @media (min-width: 1400px) {
    width: 1000px;
  }
  @media (min-width: 1600px) {
    width: 1300px;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
`;

const Heading = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  font-size: 30px;
  line-height: 50px;

  @media (min-width: 576px) {
    font-size: 26px;
    line-height: 48px;
  }
  @media (min-width: 992px) {
    font-size: 32px;
    line-height: 52px;
  }
  @media (min-width: 1400px) {
    font-size: 40px;
    line-height: 57px;
  }
  @media (min-width: 1600px) {
    font-size: 50px;
    line-height: 67px;
  }
`;

const SmallText = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  padding-right: 30px;
`;

const Image = styled.img`
  width: 400px;

  @media (min-width: 576px) {
    width: 480px;
  }
  @media (min-width: 768px) {
    width: 580px;
  }
  @media (min-width: 992px) {
    width: 800px;
  }
  @media (min-width: 1400px) {
    width: 1000px;
  }
  @media (min-width: 1600px) {
    width: 1300px;
  }
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
`;

const SvgLine = styled.img`
  position: absolute;
  top: 5%;
  left: 40%;
`;

const SvgSection = styled.div`
  position: relative;
`;
const SmallDonutSvg = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  bottom: 0px;
  left: 100%;
  filter: invert(64%) sepia(46%) saturate(3064%) hue-rotate(330deg)
    brightness(100%) contrast(101%);
  left: 200px;

  @media (min-width: 576px) {
    width: 60px;
    left: 240px;
  }
  @media (min-width: 768px) {
    width: 70px;
    left: 290px;
  }
  @media (min-width: 992px) {
    width: 90px;
    left: 400px;
  }
  @media (min-width: 1400px) {
    width: 115px;
    left: 500px;
  }
  @media (min-width: 1600px) {
    width: 148px;
    left: 650px;
  }
`;

const BlueSvg = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  width: 50px;
  bottom: 50px;
  right: 200px;

  @media (min-width: 576px) {
    width: 60px;
    right: 240px;
    bottom: 60px;
  }
  @media (min-width: 768px) {
    width: 70px;
    right: 290px;
    bottom: 70px;
  }
  @media (min-width: 992px) {
    width: 90px;
    right: 400px;
    bottom: 90px;
  }
  @media (min-width: 1400px) {
    width: 115px;
    right: 500px;
    bottom: 113px;
  }
  @media (min-width: 1600px) {
    width: 116px;
    right: 650px;
    bottom: 113px;
  }
`;

const OrangeSvg = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 260px;

  @media (min-width: 576px) {
    width: 60px;
    right: 300px;
  }
  @media (min-width: 768px) {
    width: 70px;
    right: 380px;
  }
  @media (min-width: 992px) {
    width: 90px;
    right: 504px;
  }
  @media (min-width: 1400px) {
    width: 115px;
    right: 644px;
  }
  @media (min-width: 1600px) {
    width: 116px;
    right: 844px;
  }
`;

function NavBar() {
  return (
    <Background>
      <CustomContainer>
        <Row>
          <Col lg={10} lgOffset={1}>
            <ContentContainer>
              <SmallSection>
                <Svg src={freshLogo} />
                <CompanyName>Fresh</CompanyName>
              </SmallSection>
              <SmallSection>
                <Nav>
                  <StyledList>
                    <StyledLink>Home</StyledLink>
                    <StyledLink>About Us</StyledLink>
                    <StyledLink>Info</StyledLink>
                    <StyledLink>Gallery</StyledLink>
                    <StyledLink>FAQ</StyledLink>
                    <StyledLink>Review</StyledLink>
                  </StyledList>
                </Nav>
                <Button>Contact Us</Button>
              </SmallSection>
            </ContentContainer>
          </Col>
          <Col lg={8} lgOffset={2}>
            <Section>
              <Test>
                <Text>Lorem Ipsum has been the industry’s standard</Text>
                <SmallContainer>
                  <Heading>Lorem Ipsum is simply dummy text</Heading>
                  <TextBox>
                    <SmallText>Play video</SmallText>
                    <Svg src={play} />
                  </TextBox>
                  <SvgLine src={line} />
                </SmallContainer>
              </Test>
              <Image src={video} />
              <SvgSection>
                <SmallDonutSvg src={smallDonut} />
                <BlueSvg src={blue} />
                <OrangeSvg src={orange} />
              </SvgSection>
            </Section>
          </Col>
        </Row>
      </CustomContainer>
    </Background>
  );
}

export default NavBar;
