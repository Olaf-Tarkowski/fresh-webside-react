import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import envelope from "../../resources/icons/Envelope.svg";
import telMes from "../../resources/icons/TelMes.svg";

const Background = styled.div`
  background-color: #291d65;
`;

const CustomContainer = styled(Container)`
  max-width: 2400px;
`;

const ContentContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1562px;
  padding: 27px 0;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 200;
  font-size: 14px;
`;

const Position = styled.div`
  display: flex;
  align-items: center;
`;

const Mail = styled.a`
  padding-left: 23px;
  color: #61ddfe;
`;

const TelNumber = styled.a`
  text-decoration: none;
  padding-left: 15.5px;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #6d649d;

  @media (min-width: 768px) {
    padding: 0 93.5px;
  }
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;

  @media (min-width: 576px) {
    width: 232px;
  }
`;

const StyledLink = styled.li`
  padding: 0 5px;
  transition: 0.9s;
  :hover {
    transform: scale(1.09);
    cursor: pointer;
  }

  @media (min-width: 576px) {
    padding: 0;
  }
`;

const Svg = styled.img``;

const SmallSection = styled.section`
  display: flex;
`;

function Header() {
  return (
    <Background>
      <CustomContainer>
        <Row>
          <Col lg={10} lgOffset={1}>
            <ContentContainer>
              <Position>
                <Svg src={envelope} />
                <Mail href="mailto:office@fresh.com">office@fresh.com</Mail>
              </Position>
              <SmallSection>
                <Nav>
                  <StyledList>
                    <StyledLink>About Us</StyledLink>
                    <StyledLink>Information</StyledLink>
                    <StyledLink>Contact</StyledLink>
                  </StyledList>
                </Nav>
                <Position>
                  <Svg src={telMes} />
                  <TelNumber href="tel:+48 789 678 567">
                    +48 789 678 567
                  </TelNumber>
                </Position>
              </SmallSection>
            </ContentContainer>
          </Col>
        </Row>
      </CustomContainer>
    </Background>
  );
}

export default Header;
