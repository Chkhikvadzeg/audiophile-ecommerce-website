import styled from "styled-components"
import speakerImage from "../assets/home/tablet/image-speaker-zx9.png"
import earphoneImage from "../assets/home/tablet/image-earphones-yx1.jpg"
import speakerImage2 from "../assets/home/tablet/image-speaker-zx7.jpg"
import Heading1 from "../styled-components/typography/Headings/Heading1"
import Heading4 from "../styled-components/typography/Headings/Heading4"
import Circles from "../assets/circles.png"
import Button2 from "../styled-components/Inputs/Buttons/Button2"
import { Link } from "react-router-dom"

export default function HomeItems() {
  return (
    <Wrapper>
      <OrangeSpeaker>
        <div>
          <Heading1 textColor="#FFFFFF">zx9 speaker</Heading1>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link to="/Speakers"><StyledButton>see product</StyledButton></Link>
        </div>
      </OrangeSpeaker>
      <GreySpeaker>
        <div>
          <Heading4> ZX7 SPEAKER</Heading4>
          <Link to="/Speakers"><TransparentButton>see product</TransparentButton></Link>
        </div>
      </GreySpeaker>
      <GreyEarphone>
        <div></div>
        <div>
          <Heading4> YX1 EARPHONES</Heading4>
          <Link to="/Earphones"><TransparentButton>see product</TransparentButton></Link>
        </div>
      </GreyEarphone>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 24px;
  width: 100%;
  margin-bottom: 120px;


  @media (min-width: 768px) {
    gap: 32px;
    padding: 0 40px;
    margin-bottom: 96px;
  }


  @media (min-width: 1440px) {
    gap: 48px;
    margin-bottom: 200px;
  }
`

const OrangeSpeaker = styled.div`
  background: url(${speakerImage}), url(${Circles});
  background-color: #D87D4A;
  background-position: center top 50px, center;
  background-repeat: no-repeat, no-repeat;
  background-size: 170px, 100%;
  height: 600px;
  width: 100%;
  border-radius: 8px;
  margin-top: 32px;
  padding: 55px 0;

  & > div {
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    p {
      color: rgba(255, 255, 255, 0.75);
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      max-width: 300px;
    }
  }

  @media (min-width: 768px) {
    background-size: 200px, 100%;
    padding: 64px 0;
    height: 720px;
    
    & > div {
      gap: 32px;  

      p {
        max-width: 350px;
      }
    }
  }

  @media (min-width: 1024px) {
    background-size: 410px, 100%;
    background-position: bottom -30px left 110px, bottom -600px left -200px;
    padding: 0 95px;
    display:flex;
    justify-content: flex-end;

    & > div {
      gap: 40px;
      justify-content: center;
      align-items: flex-start;

      p {
        text-align: left;
      }
    }
  }


`;

const StyledButton = styled(Button2)`
  background-color: #000000;
  color: #FFFFFF;
  border-color: transparent;

  &:hover {
    background-color: #4C4C4C;
  }
`;

const GreySpeaker = styled.div`
  background: url(${speakerImage2});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 100px 24px;


  & > div {
    display: flex;
    gap: 32px;
    flex-direction: column;
  }


  @media (min-width: 768px) {
    padding: 100px 62px;
  }

  @media (min-width: 1024px) {
    padding: 100px 95px;
  }
`;

const TransparentButton = styled(Button2)`
  background-color: transparent;
  color: #000000;
  border-color: #000000;

  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`;

const GreyEarphone = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  & > div:first-child {
    background: url(${earphoneImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px;
    height: 200px;
  }

  & > div:last-child {
    padding: 100px 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: #F1F1F1;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    & > div:first-child {
      height: auto;
    }

    & > div:last-child {
      padding: 100px 40px;
    }
  }

  @media (min-width: 1024px) {
    gap: 30px;

    & > div:last-child {
      padding: 100px 95px;
    }
  }

`;