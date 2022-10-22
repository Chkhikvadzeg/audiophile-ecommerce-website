import styled from "styled-components"
import BestGear from "../assets/home/desktop/image-best-gear.jpg"
import Heading4 from "../styled-components/typography/Headings/Heading4";

export default function Advertisement() {
  return (
    <Wrapper>
      <Content>
        <Image src={BestGear} alt="Best Gear" ></Image>
        <Description>
          <Heading>Bringing you the <span>best</span> audio gear</Heading>
          <Text>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</Text>
        </Description>
      </Content>
    </Wrapper >
  )
}

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 120px auto;
  padding: 0 24px;

  @media (min-width: 768px) {
    margin: 96px auto;
  }

  @media (min-width: 1440px) {
    margin: 200px auto;
  }
`;

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 125px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  background: #F1F1F1;
  border-radius: 8px;

  @media (min-width: 1024px) {
    height: auto;
    width: 50%;
  }
`;

const Description = styled.div`
  @media screen and (min-width: 1024px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Heading = styled(Heading4)`
  max-width: 400px;
  margin: 40px auto 32px;

  span {
    color: #D87D4A;
  }

  @media screen and (min-width: 768px) {
    max-width: 575px;
  }
`;

const Text = styled.p`
  max-width: 400px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 575px;
  }
`;