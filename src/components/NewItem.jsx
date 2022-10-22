import styled from "styled-components";
import Heading1 from "../styled-components/typography/Headings/Heading1";
import OverLine from "../styled-components/typography/SubHeadings/Overline";
import Button1 from "../styled-components/Inputs/Buttons/Button1";
import ImageHeaderMobile from "../assets/home/mobile/image-header.jpg";
import ImageHeaderTablet from "../assets/home/tablet/image-header.jpg";
import ImageHeaderDesktop from "../assets/home/desktop/image-hero.jpg";
import { Link } from "react-router-dom";

const NewItem = () => {
  return (
    <Wrapper>
      <div>
        <Description>
          <Title>
            <OverLine textColor="rgba(255,255,255,0.5)">NEW PRODUCT</OverLine>
            <Heading1 textColor="#FFFFFF">XX99 Mark II HeadphoneS</Heading1>
          </Title>
          <p>
            Experience natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast.
          </p>
          <Link to="/product/4"><Button1>See Product</Button1></Link>
        </Description>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: #191919;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  & > div {
    width: 100%;
    max-width: 1440px;
    margin: 0 165px;
    background-image: url(${ImageHeaderMobile});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px;
    & > div {
      background-image: url(${ImageHeaderTablet});
    }
  }

  @media (min-width: 1024px) {
    padding: 0 165px;
    & > div {
      text-align: left;
      background-position: right;
      background-image: url(${ImageHeaderDesktop});
    }
  }
`;

const Description = styled.div`
  padding: 108px 24px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;  
  p {
    color: rgba(255, 255, 255, 0.75);
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    margin: 24px 0 28px;
  }

  @media (min-width: 768px) {
    padding: 126px 0 167px;
    p{
      margin: 24px 0 40px;
      padding: 0 15px;
    }
  }

  @media (min-width: 1440px) {
    margin: 0;

    p {
      padding: 0;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export default NewItem;