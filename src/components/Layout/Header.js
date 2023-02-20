import { Col, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import envelope from "../../resources/icons/Envelope.svg";
import telMes from "../../resources/icons/TelMes.svg";

const Background = styled.div`
  background-color: #291d65;
`;

const Container = styled.div`
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
  padding: 0 93.5px;
  color: #6d649d;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  width: 232px;
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

const Svg = styled.img``;

const SmallSection = styled.section`
  display: flex;
`;

function Header() {
  return (
    <Background>
      <Row>
        <Col lg={10} lgOffset={1}>
          <Container>
            <div>
              <Svg src={envelope} />
              <Mail href="mailto:office@fresh.com">office@fresh.com</Mail>
            </div>
            <SmallSection>
              <Nav>
                <StyledList>
                  <StyledLink>About Us</StyledLink>
                  <StyledLink>Information</StyledLink>
                  <StyledLink>Contact</StyledLink>
                </StyledList>
              </Nav>
              <div>
                <Svg src={telMes} />
                <TelNumber href="tel:+48 789 678 567">
                  +48 789 678 567
                </TelNumber>
              </div>
            </SmallSection>
          </Container>
        </Col>
      </Row>
    </Background>
  );
}

export default Header;
