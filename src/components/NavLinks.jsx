import styled from "styled-components";
import Button3 from "../styled-components/Inputs/Buttons/Button3";
import HeadphoneImage from "../assets/image-category-thumbnail-headphones.png";
import SpeakerImage from "../assets/image-category-thumbnail-speakers.png";
import EarphoneImage from "../assets/image-category-thumbnail-earphones.png";
import arrow from "../assets/icon-arrow-right.svg";

export default function NavLinks() {
  return (
    <Wrapper>
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
    </Wrapper>

  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  max-width: 1440px;
  padding: 0 24px;
  margin: 90px auto 120px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 40px;
    gap: 10px;
    margin: 150px auto 96px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
    margin: 200px auto 170px;
    padding: 0 165px;
  }
`;


const MobileNavLink = styled.li`
  text-decoration: none;
  color: #000000;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 165px;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
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
    min-width: 100px;
    width: 30%;
  }


  @media (min-width: 768px) {
    width: 100%;

    & > img {
      width: 40%;
      min-width: 150px;
    }
  }

  @media (min-width: 1440px) {
    height: 204px;
    padding: 30px 0;
  }
`;

