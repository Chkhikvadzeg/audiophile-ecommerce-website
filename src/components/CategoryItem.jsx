import { Link } from "react-router-dom";
import styled from "styled-components"
import Button1 from "../styled-components/Inputs/Buttons/Button1";
import Heading2 from "../styled-components/typography/Headings/Heading2";
import Overline from "../styled-components/typography/SubHeadings/Overline";

export default function CategoryItem({ item, index }) {
  return (
    <Wrapper>
      <Content reverse={index % 2 === 0}>
        <Images>
          <MobileImage>
            <img src={process.env.PUBLIC_URL + item.image.mobile} alt={item.name} />
          </MobileImage>
          <TabletImage>
            <img src={process.env.PUBLIC_URL + item.image.tablet} alt={item.name} />
          </TabletImage>
          <DesktopImage>
            <img src={process.env.PUBLIC_URL + item.image.desktop} alt={item.name} />
          </DesktopImage>
        </Images>
        <Info reverse={index % 2 === 0}>
          {item.new && <Overline>New Product</Overline>}
          <Heading2>{item.name}</Heading2>
          <p>{item.description}</p>
          <Link to={`/product/${item.id}`}><Button1>See Product</Button1></Link>
        </Info>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 165px;
  }

`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    gap: 52px;
  }

  @media (min-width: 1024px) {
    flex-direction: ${({ reverse }) => reverse ? "row-reverse" : "row"};
    justify-content: space-between;
    gap: 30px;
  }
`;

const Images = styled.div`
  height: 352px;
  width: 100%;

  & > * {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    background-color: #F1F1F1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {

    & > * {

      img {
        width: 50%;
      }
    }
  }

  @media (min-width: 1024px) {
    height: 560px;
    flex: 1;

    & > * {

      img {
        width: 100%;
      }
    }
  }
`;

const MobileImage = styled.div`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const TabletImage = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const DesktopImage = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Info = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 572px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    flex: 1;
    text-align: left;
    align-items: flex-start;
    padding-left: ${({ reverse }) => reverse ? "0" : "95px"};
    padding-right: ${({ reverse }) => reverse ? "95px" : "0"};
  }
`;

