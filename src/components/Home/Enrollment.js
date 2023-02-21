import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import envelope from "../../resources/icons/EnvelopeBS.svg";
import doubleLine from "../../resources/icons/DoubleLine.svg";
import longArrow from "../../resources/icons/LongArrow.svg";
import orange from "../../resources/icons/Orange.svg";

const CustomContainer = styled(Container)`
  max-width: 2400px;
`;

const ContentContainer = styled.div`
  margin: auto;
  padding-top: 259px;
  max-width: 1562px;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  width: 500px;
  height: 346px;
  background: #f8f7ff;
  padding: 88px 88px;
  z-index: 1;
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    width: 580px;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 950px;
    padding: 88px 134px;
  }
  @media (min-width: 1400px) {
    width: 1300px;
  }
`;

const Heading = styled.div`
  padding-bottom: 71px;
  max-width: 845px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  font-size: 22px;
  line-height: 40px;
  color: #312477;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const Line = styled.div`
  position: relative;
`;

const LineSvg = styled.img`
  width: 108px;
  height: auto;
  position: absolute;
  top: -109px;
  left: 299px;

  @media (min-width: 768px) {
    width: 145px;
    height: auto;
    top: -113px;
    left: 408px;
  }
`;

const ArrowSvg = styled.img`
  width: 108px;
  height: auto;
  position: absolute;
  top: -45px;
  right: 88px;

  @media (min-width: 768px) {
    width: 145px;
    height: auto;
    top: -45px;
    right: 88px;
  }
  @media (min-width: 992px) {
    width: 145px;
    height: auto;
    top: -50px;
    right: 116px;
  }
  @media (min-width: 1400px) {
    width: 139px;
    height: auto;
    top: -50px;
    right: 198px;
  }
`;

const OrangeSvg = styled.img`
  position: absolute;
  width: 50px;
  height: auto;
  left: -137px;
  bottom: -20px;
  transform: matrix(0, -1, 1, 0, 0, 0);

  @media (min-width: 768px) {
    width: 70px;
    height: auto;
    left: -157px;
    bottom: -59px;
  }
  @media (min-width: 992px) {
    width: 90px;
    height: auto;
    left: -223px;
  }
  @media (min-width: 1400px) {
    width: 116px;
    height: auto;
    left: -249px;
  }
`;

const SmallSection = styled.section`
  display: flex;
`;

const Button = styled.button`
  padding: 0;
  width: 228px;
  height: 60px;
  background-color: #61ddfe;
  font-size: 17px;
  color: #fff;
  border: none;
  border-radius: 30px;
  transition: 0.9s;
  :hover {
    transform: scale(1.09);
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  margin-right: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 764px;
  height: 60px;
  background: #fff;
  border-radius: 30px;
`;

const InputIcon = styled.img`
  margin: 0 32px;
`;

const Input = styled.input`
  font-size: 17px;
  line-height: 22px;
  border: none;
  outline: none;
  ::placeholder {
    color: #312477;
  }
`;

function Enrollment() {
  return (
    <CustomContainer>
      <Row>
        <Col lg={10} lgOffset={1}>
          <ContentContainer>
            <Section>
              <Heading>Lorem Ipsum is simply dummy printing</Heading>
              <Line>
                <LineSvg src={doubleLine} />
                <ArrowSvg src={longArrow} />
                <OrangeSvg src={orange} />
              </Line>
              <SmallSection>
                <InputWrapper>
                  <InputIcon src={envelope} />
                  <Input type="text" placeholder="Your e-mail" />
                </InputWrapper>
                <Button>Sign up</Button>
              </SmallSection>
            </Section>
          </ContentContainer>
        </Col>
      </Row>
    </CustomContainer>
  );
}

export default Enrollment;
