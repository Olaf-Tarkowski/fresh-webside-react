import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import leftImg from "../../resources/images/LeftImg.png";
import rightImg from "../../resources/images/RightImg.png";
import arrow from "../../resources/icons/Arrow.svg";

const CustomContainer = styled(Container)`
  max-width: 1608px;
  margin: 0 auto 109px;
  color: #312477;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px 50px;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Date = styled.div`
  margin: 52px 0 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 33px;
  background: #f8f7ff;
  font-size: 11px;
  font-weight: 300;
  line-height: 28px;
  border-radius: 17px;
`;

const Heading = styled.div`
  max-width: 596px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
`;

const Text = styled.div`
  padding: 27px 0 48px;
  max-width: 422px;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
`;

const LinkSection = styled.div`
  display: flex;
`;

const Link = styled.a`
  font-size: 17px;
  line-height: 22px;
  padding-right: 28px;
  text-decoration: underline;
`;

const ImgTextSection = styled.div`
  position: absolute;
  display: flex;
  padding: 20px;
`;

const ImgText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  padding: 0 20px;
  background: #ff7d44;
  font-size: 12px;
  font-weight: 300;
  line-height: 31px;
  border-radius: 19px;
  color: #fff;
  &:nth-child(1) {
    margin-right: 6px;
  }
`;

function InfoCards() {
  return (
    <CustomContainer>
      <Row>
        <Col lg={6}>
          <Card>
            <ImgTextSection>
              <ImgText>Marketing</ImgText>
              <ImgText>Nowe technologie</ImgText>
            </ImgTextSection>
            <Image src={leftImg} />
            <Date>20.04.2021</Date>
            <Heading>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Heading>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin
            </Text>
            <LinkSection>
              <Link>Read more</Link>
              <Image src={arrow} />
            </LinkSection>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <ImgTextSection>
              <ImgText>Branding</ImgText>
              <ImgText>Case study</ImgText>
            </ImgTextSection>
            <Image src={rightImg} />
            <Date>20.04.2021</Date>
            <Heading>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Heading>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin
            </Text>
            <LinkSection>
              <Link>Read more</Link>
              <Image src={arrow} />
            </LinkSection>
          </Card>
        </Col>
      </Row>
    </CustomContainer>
  );
}

export default InfoCards;
