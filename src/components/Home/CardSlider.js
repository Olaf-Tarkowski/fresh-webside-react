import { Col, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import line from "../../resources/icons/Line.svg";
import Cards from "./Cards";

const Container = styled.div`
  padding-top: 244px;
  margin: auto;
  max-width: 1562px;
  font-weight: 200;
  font-size: 17px;
  color: #000;
`;

const Heading = styled.div`
  max-width: 845px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  font-size: 30px;
  line-height: 50px;
  color: #312477;
  text-align: center;
  @media (min-width: 576px) {
    width: 600px;
    font-size: 35px;
    line-height: 52px;
  }
  @media (min-width: 1400px) {
    font-size: 40px;
    line-height: 57px;
  }
  @media (min-width: 2000px) {
    width: 845px;
    font-size: 50px;
    line-height: 67px;
  }
`;

const Line = styled.div`
  position: relative;
`;

const Svg = styled.img`
  width: 307px;
  height: 218px;
  position: absolute;
  top: -106px;
  left: -117px;
`;

const SmallSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



function CardSlider() {
  return (
    <Row>
      <Col lg={10} lgOffset={1}>
        <Container>
          <SmallSection>
            <Heading>
              Lorem Ipsum is simply dummy text printing and typesetting
              industry.
            </Heading>
            <Line>
              <Svg src={line} />
            </Line>
          </SmallSection>
          <Cards />
        </Container>
      </Col>
    </Row>
  );
}

export default CardSlider;
