import { Col, Row } from "styled-bootstrap-grid";
import styled from "styled-components";

const Background = styled.div`
  background-color: #291d65;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 73px;
`;

export const Mail = styled.a`
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 200;
  font-size: 14px;
  height: 19px;
  color: #61ddfe;
`;

export const Nav = styled.nav`
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 200;
  font-size: 14px;
  color: #6d649d;
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  width: 232px;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled.li`
  transition: 0.9s;
  :hover {
    transform: scale(1.09);
    cursor: pointer;
  }
`;

function Header() {
  return (
    <Background>
      <Row>
        <Col lg={10} lgOffset={1}>
          <Container>
            <Mail href="mailto:office@fresh.com">office@fresh.com</Mail>
            <Nav>
              <StyledList>
                <StyledLink>About Us</StyledLink>
                <StyledLink>Information</StyledLink>
                <StyledLink>Contact</StyledLink>
              </StyledList>
            </Nav>
          </Container>
        </Col>
      </Row>
    </Background>
  );
}

export default Header;
