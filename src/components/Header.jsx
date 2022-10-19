import styled from "styled-components"
import burger from "../assets/icon-hamburger.svg"
import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <img src={burger} alt="hamburger" />
        <img src={logo} alt="logo" />
        <img src={cart} alt="cart" />
      </StyledHeader>
    </Container>
  )
}

const Container = styled.div`
  background-color: #191919;
`;

const StyledHeader = styled.header`
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1440px;
  margin: 0 auto;
`;

export default Header