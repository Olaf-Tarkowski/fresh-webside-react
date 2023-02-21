import { Col, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import star from "../../resources/icons/Star.svg";
import photo from "../../resources/images/Photo.png";
import quote from "../../resources/icons/Quote.svg";

const Background = styled.div`
  margin: 158px 0 159px;
  background-color: #f8f7ff;
`;

const Container = styled.div`
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
  line-height: 28px;
  color: #312477;
`;

const Text = styled.div`
  margin-top: 91px;
  max-width: 961px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 60px;
  color: #312477;
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
  width: 534px;
  height: 419px;
  bottom: 30px;
  right: -195px;
  filter: invert(93%) sepia(100%) saturate(29%) hue-rotate(56deg)
    brightness(107%) contrast(109%);
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
      <Row>
        <Col lg={10} lgOffset={1}>
          <Container>
            <SmallSection>
              <Rating>Średnia ocena: 5.0</Rating>
              <div>
                {[...Array(5)].map((_, i) => (
                  <StarSvg key={i} src={star} />
                ))}
              </div>
            </SmallSection>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000...
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
          </Container>
        </Col>
      </Row>
    </Background>
  );
}

export default ReviewCard;
