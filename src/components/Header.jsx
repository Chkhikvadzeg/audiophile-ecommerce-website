import styled from "styled-components"
import burger from "../assets/icon-hamburger.svg"
import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <HeaderLeft>
          <Burger src={burger} alt="hamburger" />
          <StyledLink to="/"><img src={logo} alt="logo" /></StyledLink>
        </HeaderLeft>
        <Navigation>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Headphones">Headphones</NavLink>
          <NavLink to="/Speakers">Speakers</NavLink>
          <NavLink to="/Earphones">Earphones</NavLink>
        </Navigation>
        <HeaderRight>
          <Cart src={cart} alt="cart" />
        </HeaderRight>
      </StyledHeader>
    </Container>
  )
}

const Container = styled.div`
  background-color: #191919;
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.header`
  width: 100%;
  margin: 0;
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1440px;

  @media (min-width: 768px) {
    margin: 0 40px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 40px;
  }

  @media screen and (min-width: 1024px) {
    width: auto;
  }
`

const Navigation = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 34px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #D87D4A;
  }
`;

const HeaderRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: auto;
  }

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Burger = styled.img`
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Cart = styled.img`
  cursor: pointer;
`;

export default Header