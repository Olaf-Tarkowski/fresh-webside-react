import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import star from "../../resources/icons/Star.svg";
import photo from "../../resources/images/Photo.png";
import quote from "../../resources/icons/Quote.svg";
import orange from "../../resources/icons/Orange.svg";
import smallDonut from "../../resources/icons/SmallDonut.svg";

const Background = styled.div`
  margin: 158px 0 159px;
  background-color: #f8f7ff;
`;

const CustomContainer = styled(Container)`
  max-width: 2400px;
`;

const ContentContainer = styled.div`
  position: relative;
  max-width: 961px;
  margin: auto;
  z-index: 1;
`;

const SmallSection = styled.div`
  padding-top: 194px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Rating = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  color: #312477;
`;

const Text = styled.div`
  margin-top: 91px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 30px;
  font-weight: bold;
  line-height: 50px;
  color: #312477;

  @media (min-width: 768px) {
    width: 670px;
    font-size: 35px;
    line-height: 52px;
  }
  @media (min-width: 1400px) {
    width: 765px;
    font-size: 40px;
    line-height: 57px;
  }
  @media (min-width: 1600px) {
    width: 961px;
    font-size: 50px;
    line-height: 67px;
  }
`;

const StarSvg = styled.img`
  padding: 24px 10px 0;
`;

const PersonSection = styled.div`
  margin: 91px 0 196px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
`;

const Image = styled.img``;

const SmallQuote = styled.img`
  position: absolute;
  width: 53px;
  height: 41px;
  bottom: 350px;
  left: -147px;
  filter: invert(64%) sepia(46%) saturate(3064%) hue-rotate(330deg)
    brightness(100%) contrast(101%);
`;

const Quote = styled.img`
  z-index: -1;
  position: absolute;
  opacity: 0.51;
  width: 300px;
  height: auto;
  bottom: 154px;
  right: 6px;
  filter: invert(93%) sepia(100%) saturate(29%) hue-rotate(56deg)
    brightness(107%) contrast(109%);

  @media (min-width: 576px) {
    width: 380px;
    height: auto;
    bottom: 100px;
    right: 6px;
  }
  @media (min-width: 1400px) {
    width: 450px;
    height: auto;
    bottom: 87px;
    right: -118px;
  }
  @media (min-width: 1600px) {
    width: 534px;
    height: auto;
    bottom: 30px;
    right: -195px;
  }
`;

const OrangeSvg = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  top: -40px;
  left: -100px;

  @media (min-width: 768px) {
    width: 70px;
    height: auto;
    left: -200px;
  }
  @media (min-width: 992px) {
    width: 90px;
    height: auto;
    top: -20px;
    left: -250px;
  }
  @media (min-width: 1500px) {
    width: 116px;
    height: auto;
    left: -310px;
  }
`;

const SmallDonutSvg = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  bottom: -15px;
  right: 30px;
  filter: invert(83%) sepia(9%) saturate(5625%) hue-rotate(165deg)
    brightness(104%) contrast(99%);

  @media (min-width: 768px) {
    width: 70px;
    height: auto;
    bottom: -35px;
    right: 0px;
  }
  @media (min-width: 992px) {
    width: 100px;
    height: auto;
    bottom: -67px;
    right: -46px;
  }
  @media (min-width: 1500px) {
    width: 114px;
    height: auto;
    bottom: -80px;
    right: -190px;
  }
`;

const Person = styled.div`
  padding-left: 18px;
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  color: #312477;
`;

const DotsSection = styled.div`
  display: flex;
  padding-right: 130px;
  @media (min-width: 1500px) {
    padding: 0;
  }
`;

const Dots = styled.div`
  width: 10px;
  height: 10px;
  background-color: none;
  border: 2px solid #312477;
  border-radius: 50%;
  opacity: 0.2;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 40px;
  background-color: none;
  border: 2px solid #312477;
  border-radius: 50%;
`;

function ReviewCard() {
  return (
    <Background>
      <CustomContainer>
        <Row>
          <Col lg={10} lgOffset={1}>
            <ContentContainer>
              <SmallSection>
                <Rating>Średnia ocena: 5.0</Rating>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <StarSvg key={i} src={star} />
                  ))}
                </div>
              </SmallSection>
              <Text>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000...
              </Text>
              <SmallQuote src={quote} />
              <Quote src={quote} />
              <PersonSection>
                <Box>
                  <Image src={photo} />
                  <Person>Jan Kowalski,&nbsp;</Person>
                  Grupa Kraków
                </Box>
                <DotsSection>
                  <Dots />
                  <Dot />
                  <Dots />
                </DotsSection>
              </PersonSection>
              <OrangeSvg src={orange} />
              <SmallDonutSvg src={smallDonut} />
            </ContentContainer>
          </Col>
        </Row>
      </CustomContainer>
    </Background>
  );
}

export default ReviewCard;
