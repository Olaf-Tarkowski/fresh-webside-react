import { Col, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import freshLogo from "../../resources/icons/Logo.svg";
import donut from "../../resources/icons/Donut.svg";
import orange from "../../resources/icons/Orange.svg";
import facebook from "../../resources/icons/Facebook.svg";
import twitter from "../../resources/icons/Twitter.svg";
import instagram from "../../resources/icons/Instagram.svg";
import smartwww from "../../resources/icons/Smartwww.png";
import arrow from "../../resources/icons/Arrow.svg";

const NavyBlueBg = styled.div`
  background-color: #312477;
  position: relative;
`;

const WhiteBg = styled.div`
  background-color: #f8f7ff;
`;

const DonutSvg = styled.img`
  position: absolute;
  bottom: 0;
`;

const OrangeSvg = styled.img`
  position: absolute;
  right: -140px;
  bottom: -33px;
  transform: matrix(0, 1, -1, 0, 0, 0);
`;

const SideWidth = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 177px 0 133px;
  color: white;
`;

const ContactSection = styled.section`
  margin-top: 92px;
  display: flex;
  flex-direction: column;
`;

const NavSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SmallSection = styled.section`
  display: flex;
  align-items: center;
`;

const CompanyName = styled.div`
  padding-left: 12.5px;
  font-size: 19px;
  line-height: 26px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.57px;
`;

const WebisoText = styled.div`
  margin: 62px 0 79px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 22px;
  line-height: 30px;
  width: 180px;
  height: 60px;
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

const TelNumber = styled.a`
text-decoration: none;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 200;
  font-size: 30px;
  line-height: 40px;
  color: #FFFFFF;
`;

const Mail = styled.a`
  font-family: "Space Grotesk", sans-serif;
  font-size: 30px;
  line-height: 40px;
  color: #ff7d44;
`;

const SmallContainer = styled.div`
position: relative;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
`;

const Text = styled.div`
  padding: 32px 0;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 200;
  font-size: 16px;
  line-height: 21px;
  color: #a49fbe;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  &:not(:first-child) {
    margin-left: 98px;
  }
`;

const StyledLink = styled.li`
  font-size: 17px;
  line-height: 32px;
  transition: 0.9s;
  :hover {
    color:#61DDFE;
    text-decoration: underline;
    transform: scale(1.09);
    cursor: pointer;
  }
`;

const Svg = styled.img``;

const SocialMediaSection = styled.div`
  padding-top: 166px;
  display: flex;
  justify-content: flex-end;
`;

const Link = styled.a`
  &:nth-child(2) {
    margin: 0 20px;
  }
`;

const SocialMediaSvg = styled.img`
  height: 23px;
  width: 23px;
  filter: invert(64%) sepia(46%) saturate(3064%) hue-rotate(330deg)
    brightness(100%) contrast(101%);
`;

const Icon = styled.img``;

const ArrowSvg = styled.img`
position:absolute;
right: -127px;
width: 7px;
height: 13px;
transform: matrix(0, -1, 1, 0, 0, 0);
`;

function Footer() {
  return (
    <>
      <NavyBlueBg>
        <DonutSvg src={donut} />
        <Row>
          <Col lg={10} lgOffset={1}>
            <SideWidth>
              <Row>
                <Col lg={4}>
                  <SmallSection>
                    <Svg src={freshLogo} />
                    <CompanyName>Fresh</CompanyName>
                  </SmallSection>
                  <WebisoText>Webiso Sp. J. Domiński, Maziarz</WebisoText>
                  <Button>Contact Us</Button>
                </Col>
                <Col lg={4}>
                  <ContactSection>
                    <TelNumber href="tel:+48 789 678 567">
                      +48 789 678 567
                    </TelNumber>
                    <Mail href="mailto:office@fresh.com">office@fresh.com</Mail>
                  </ContactSection>
                </Col>
                <Col lg={4}>
                  <NavSection>
                    <StyledList>
                      <StyledLink>Home</StyledLink>
                      <StyledLink>About Us</StyledLink>
                      <StyledLink>Info</StyledLink>
                    </StyledList>
                    <StyledList>
                      <StyledLink>Gallery</StyledLink>
                      <StyledLink>FAQ</StyledLink>
                      <StyledLink>Review</StyledLink>
                    </StyledList>
                  </NavSection>
                  <SocialMediaSection>
                    <Link href="https://www.facebook.com/">
                      <SocialMediaSvg src={facebook} />
                    </Link>
                    <Link href="https://twitter.com/">
                      <SocialMediaSvg src={twitter} />
                    </Link>
                    <Link href="https://www.instagram.com/">
                      <SocialMediaSvg src={instagram} />
                    </Link>
                  </SocialMediaSection>
                  <OrangeSvg src={orange} />
                </Col>
              </Row>
            </SideWidth>
          </Col>
        </Row>
      </NavyBlueBg>
      <WhiteBg>
        <Row>
          <Col lg={10} lgOffset={1}>
            <SmallContainer>
              <Text>© 2021 Wszystkie prawa zastrzeżone</Text>
              <Icon src={smartwww} />
              <ArrowSvg src={arrow} />
            </SmallContainer>
          </Col>
        </Row>
      </WhiteBg>
    </>
  );
}

export default Footer;
