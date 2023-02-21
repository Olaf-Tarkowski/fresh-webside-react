import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import freshLogo from "../../resources/icons/Logo.svg";
import video from "../../resources/images/Video.png";
import play from "../../resources/icons/Play.svg";
import line from "../../resources/icons/Line.svg";
import orange from "../../resources/icons/Orange.svg";
import orangeDonut from "../../resources/icons/OrangeDonut.svg";
import blue from "../../resources/icons/Blue.svg";

const Background = styled.div`
  background-color: #312477;
  height: 600px;

  @media (min-width: 576px) {
    height: 600px;
  }
  @media (min-width: 992px) {
    height: 650px;
  }
  @media (min-width: 1300px) {
    height: 700px;
  }
  @media (min-width: 1700px) {
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
  flex-direction: column;
  max-width: 400px;
  color: #fff;

  @media (min-width: 610px) {
    max-width: 500px;
  }
  @media (min-width: 765px) {
    max-width: 580px;
  }
  @media (min-width: 992px) {
    max-width: 1300px;
  }
`;

const SmallContainer = styled.div`
  position: relative;
  padding: 16px 0 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 23px;
`;

const Heading = styled.div`
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  font-size: 30px;
  line-height: 50px;
  @media (min-width: 576px) {
    font-size: 35px;
    line-height: 52px;
  }
  @media (min-width: 1400px) {
    font-size: 40px;
    line-height: 57px;
  }
  @media (min-width: 2000px) {
    font-size: 50px;
    line-height: 67px;
  }
`;

const SmallText = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  padding-right: 30px;
`;

const Image = styled.img``;

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
const OrangeDonutSvg = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  bottom: 0px;
  left: 100%;

  @media (min-width: 768px) {
    width: 70px;
    height: auto;
  }
  @media (min-width: 992px) {
    width: 100px;
    height: auto;
  }
  @media (min-width: 1500px) {
    width: 148px;
    height: auto;
  }
`;

const BlueSvg = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  bottom: 53px;
  right: 100%;

  @media (min-width: 768px) {
    width: 70px;
    height: auto;
    bottom: 80px;
  }
  @media (min-width: 992px) {
    width: 90px;
    height: auto;
    bottom: 100px;
  }
  @media (min-width: 1500px) {
    width: 116px;
    height: auto;
    bottom: 114px;
  }
`;

const OrangeSvg = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: -100px;

  @media (min-width: 768px) {
    width: 70px;
    height: auto;
    left: -150px;
  }
  @media (min-width: 992px) {
    width: 90px;
    height: auto;
    left: -200px;
  }
  @media (min-width: 1500px) {
    width: 116px;
    height: auto;
    left: -310px;
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
              <Text>Lorem Ipsum has been the industry’s standard</Text>
              <SmallContainer>
                <Heading>Lorem Ipsum is simply dummy text</Heading>
                <TextBox>
                  <SmallText>Play video</SmallText>
                  <Svg src={play} />
                </TextBox>
                <SvgLine src={line} />
              </SmallContainer>
              <Image src={video} />
              <SvgSection>
                <OrangeDonutSvg src={orangeDonut} />
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
