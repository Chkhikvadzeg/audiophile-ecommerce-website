import styled from "styled-components"
import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer({ category }) {
  const NavLinks = ['Home', 'Headphones', 'Speakers', 'Earphones']
  return (
    <Wrapper>
      <Content>
        <Top>
          <Link to="/">
            <img src={Logo} alt="Audiophile logo" />
          </Link>
          <Nav>
            {NavLinks.map(link => {
              return <ListItem isChosen={link === category} key={link}><StyledLink to={`${link === 'Home' ? '/' : `/${link}`}`}>{link}</StyledLink></ListItem>
            })}
          </Nav>
        </Top>
        <Description>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</Description>
        <Bottom>
          <p>&copy; Copyright 2021. All Rights Reserved</p>
          <Socials>
            <li>
              <a href="https://www.facebook.com/Chkhikvadzeg/" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/chkhiikvadze_g/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </li>
          </Socials>
        </Bottom>
      </Content>
    </Wrapper >
  )
}

const Wrapper = styled.footer`
  padding: 0 24px;
  background: #101010;
  color: #FFFFFF;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 165px;
  }
`;

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 52px 0 38px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: #D87D4A;
  }

  @media (min-width: 768px) {
    padding: 60px 0 46px;

    &:before {
      left: 40px;
    }
  }

  @media (min-width: 1024px) {
    padding: 75px 0 48px;

    &:before {
      left: 50px;
    }
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 32px;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 34px;
  }
`;

const ListItem = styled.li`
  color: ${props => props.isChosen ? '#D87D4A' : '#FFFFFF'};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: inherit;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all .2s ease-in-out;

  &:hover {
    color: #D87D4A;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin: 48px 0;

  @media (min-width: 768px) {
    text-align: left;
    margin: 32px 0 80px;
  }

  @media (min-width: 1024px) {
    margin: 36px 0 56px;
    max-width: 500px;
  }
`;

const Bottom = styled.div`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  font-weight: 700;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Socials = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;

  @media (min-width: 1024px) {
    transform: translateY(-80px);
  }
`;

// style for react-icons
const Facebook = styled(FaFacebookSquare)`
  color: white;
  font-size: 1.5em;
  transition: all .3s ease-in-out;

  &:hover {
    color: #D87D4A;
  }
`

const Instagram = styled(FaInstagram)`
  color: white;
  font-size: 1.5em;
  transition: .3s ease-in-out;

  &:hover {
    color: #D87D4A;
  }
`

const Twitter = styled(FaTwitter)`
  color: white;
  font-size: 1.5em;
  transition: .3s ease-in-out;

  &:hover {
    color: #D87D4A;
  }
`