import { Col, Row } from "styled-bootstrap-grid";
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
  height: 820px;
`;

const Container = styled.div`
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
  padding: 0 88px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  width: 592px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled.li`
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
  max-width: 1300px;
  color: #fff;
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
  font-size: 50px;
  line-height: 67px;
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

const Test = styled.div`
  position: relative;
`;
const OrangeDonutSvg = styled.img`
  max-width: 148px;
  max-height: 297px;
  position: absolute;
  bottom: 0px;
  left: 100%;
`;

const BlueSvg = styled.img`
  width: 116px;
  height: 114px;
  position: absolute;
  bottom: 114px;
  left: -116px;
`;

const OrangeSvg = styled.img`
  width: 116px;
  height: 114px;
  position: absolute;
  bottom: 0;
  left: -310px;
`;

function NavBar() {
  return (
    <Background>
      <Row>
        <Col lg={10} lgOffset={1}>
          <Container>
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
          </Container>
        </Col>
        <Col lg={10} lgOffset={1}>
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
            <Test>
              <OrangeDonutSvg src={orangeDonut} />
              <BlueSvg src={blue} />
              <OrangeSvg src={orange} />
            </Test>
          </Section>
        </Col>
      </Row>
    </Background>
  );
}

export default NavBar;
