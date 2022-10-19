import styled from "styled-components"
import burger from "../assets/icon-hamburger.svg"
import logo from "../assets/logo.svg"
import cart from "../assets/icon-cart.svg"
import arrow from "../assets/icon-arrow-right.svg"
import { Link } from "react-router-dom"
import Button3 from "../styled-components/Inputs/Buttons/Button3"
import HeadphoneImage from "../assets/image-category-thumbnail-headphones.png"
import SpeakerImage from "../assets/image-category-thumbnail-speakers.png"
import EarphoneImage from "../assets/image-category-thumbnail-earphones.png"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Container>
      <StyledHeader>
        <HeaderLeft>
          <Burger onClick={() => setIsMenuOpen(prev => !prev)} src={burger} alt="hamburger" />
          <StyledLink to="/"><img src={logo} alt="logo" /></StyledLink>
        </HeaderLeft>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Headphones">Headphones</NavLink>
          <NavLink to="/Speakers">Speakers</NavLink>
          <NavLink to="/Earphones">Earphones</NavLink>
        </Navigation>
        <MobileMenu isMenuOpen={isMenuOpen}>
          <MobileNavLink>
            <img src={HeadphoneImage} alt="headphones" />
            <span>Headphones</span>
            <Button3 to='/Headphones'>
              <img src={arrow} alt="arrow" />
              <span>Shop</span>
            </Button3>
          </MobileNavLink>
          <MobileNavLink>
            <img src={SpeakerImage} alt="speakers" />
            <span>Speakers</span>
            <Button3 to='/Speakers'>
              <img src={arrow} alt="arrow" />
              <span>Shop</span>
            </Button3>
          </MobileNavLink>
          <MobileNavLink>
            <img src={EarphoneImage} alt="earphones" />
            <span>Earphones</span>
            <Button3 to='/Earphones'>
              <img src={arrow} alt="arrow" />
              <span>Shop</span>
            </Button3>
          </MobileNavLink>
        </MobileMenu>
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
    gap: 20px;
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

const MobileMenu = styled.ul`
  padding: 82px 24px 32px;
  background-color: #FFFFFF;
  border-radius: 0px 0px 8px 8px;
  position: absolute;
  top: 91px;
  left: ${props => props.isMenuOpen ? '0' : '-100%'};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 70px;
  z-index: 1;
  transition: left 0.3s ease-in-out;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavLink = styled.li`
  text-decoration: none;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 165px;
  width: 100%;
  background: #F1F1F1;
  border-radius: 8px;
  position: relative;
  gap: 16px;
  padding: 22px 0;

  & > img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
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