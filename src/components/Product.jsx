import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import data from "../data.json"
import Header from "./Header"
import Heading2 from "../styled-components/typography/Headings/Heading2"
import Overline from "../styled-components/typography/SubHeadings/Overline"
import Button1 from "../styled-components/Inputs/Buttons/Button1"
import { useState } from "react"
import Heading4 from "../styled-components/typography/Headings/Heading4"
import NavLinks from "./NavLinks"
import Advertisement from './Advertisement'
import Footer from './Footer'

export default function Product({ isMenuOpen, setIsMenuOpen }) {
  const { id } = useParams()
  const product = data.find(item => +item.id === +id);
  const category = product.category[0].toUpperCase() + product.category.slice(1);
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} category={category} />
      <Wrapper>
        <Content>
          <StyledLink to={`/${category}`}>Go Back</StyledLink>
          <Top>
            <Images>
              <MobileImage>
                <img src={process.env.PUBLIC_URL + product.image.mobile} alt={product.name} />
              </MobileImage>
              <TabletImage>
                <img src={process.env.PUBLIC_URL + product.image.tablet} alt={product.name} />
              </TabletImage>
              <DesktopImage>
                <img src={process.env.PUBLIC_URL + product.image.desktop} alt={product.name} />
              </DesktopImage>
            </Images>
            <Info>
              {product.new && <Overline>New Product</Overline>}
              <Heading2>{product.name}</Heading2>
              <p>{product.description}</p>
              <Price>$ {product.price}</Price>
              <AddToCart>
                <Add>
                  <span onClick={decreaseQuantity}>-</span>
                  <span>{quantity}</span>
                  <span onClick={increaseQuantity}>+</span>
                </Add>
                <Button1>Add to Cart</Button1>
              </AddToCart>
            </Info>
          </Top>
          <FeaturesAndBox>
            <Features>
              <Heading4>FEATURES</Heading4>
              <p>{product.features}</p>
            </Features>
            <Box>
              <Heading4>IN THE BOX</Heading4>
              <ul>
                {product.includes.map(item => {
                  return (
                    <li key={item.item}>
                      <span>{item.quantity}x</span>
                      <span>{item.item}</span>
                    </li>
                  )
                })}
              </ul>
            </Box>
          </FeaturesAndBox>
          <Gallery>
            <Left>
              <div>
                <img src={process.env.PUBLIC_URL + product.gallery.first.mobile} alt={product.name} />
                <img src={process.env.PUBLIC_URL + product.gallery.first.tablet} alt={product.name} />
                <img src={process.env.PUBLIC_URL + product.gallery.first.desktop} alt={product.name} />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + product.gallery.second.mobile} alt={product.name} />
                <img src={process.env.PUBLIC_URL + product.gallery.second.tablet} alt={product.name} />
                <img src={process.env.PUBLIC_URL + product.gallery.second.desktop} alt={product.name} />
              </div>
            </Left>
            <div>
              <img src={process.env.PUBLIC_URL + product.gallery.third.mobile} alt={product.name} />
              <img src={process.env.PUBLIC_URL + product.gallery.third.tablet} alt={product.name} />
              <img src={process.env.PUBLIC_URL + product.gallery.third.desktop} alt={product.name} />
            </div>
          </Gallery>
          <Other>
            <Heading4>YOU MAY ALSO LIKE</Heading4>
            <Products>
              {product.others.map(item => {
                const itemId = data.find(product => product.slug === item.slug).id;
                return (
                  <ProductCard key={item.slug}>
                    <ProductImages>
                      <img src={process.env.PUBLIC_URL + item.image.mobile} alt={item.name} />
                      <img src={process.env.PUBLIC_URL + item.image.tablet} alt={item.name} />
                      <img src={process.env.PUBLIC_URL + item.image.desktop} alt={item.name} />
                    </ProductImages>
                    <ProductInfo>
                      <Heading4>{item.name}</Heading4>
                      <Link to={`/${category}/${itemId}`}><Button1>View Product</Button1></Link>
                    </ProductInfo>
                  </ProductCard>
                )
              })}
            </Products>
          </Other>
        </Content>
      </Wrapper>
      <NavLinks padding />
      <Advertisement padding />
      <Footer />
    </>
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

`;

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  text-decoration: none;
  display: block;
  margin: 16px 0 24px;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  @media (min-width: 768px) {
    margin: 33px 0 24px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap:70px;
    align-items: center;
  }

  @media (min-width: 1024px) {
    gap: 125px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex: 1;
    gap: 32px;
  }
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #000000;
`;

const AddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 1024px) {
    margin-top: 10px;
  }
`;

const Add = styled.div`
  background: #F1F1F1;
  width: 120px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  span {
    cursor: pointer;
    width: 16px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease-in-out;
    user-select: none;

    &:hover {
      color: #D87D4A;
    }
  }

  span:nth-child(2) {
    color: #000000;
    font-weight: 700;
  }


`;

const Images = styled.div`

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

const MobileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 327px;
  background: #F1F1F1;
  border-radius: 8px;

  img {
    width: 50%;
    max-height: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const TabletImage = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  background: #F1F1F1;
  border-radius: 8px;

  img {
    width: 60%;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const DesktopImage = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 560px;
  background: #F1F1F1;
  border-radius: 8px;

  img {
    width: 60%;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const FeaturesAndBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 88px;
  margin: 88px 0;

  @media (min-width: 768px) {
    gap: 120px;
    margin: 120px 0;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 125px;
  }
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    white-space: pre-line;
  }

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1024px) {
    flex: 2;
  }

`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 16px;

    span:first-child {
      font-weight: 700;
      color: #D87D4A;
    }

    span:last-child {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (min-width: 768px) {
    gap: 10px;
    flex-direction: row;
    align-items: flex-start;

    h4 {
      flex: 1;
    }

    ul {
      flex: 1;
    }

    li {
      gap: 24px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    flex: 1;
    gap: 32px;

    h4 {
      flex: 0;
      white-space: nowrap;
    }

    ul {
      flex: 0;
    }
  }

`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 120px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius:8px;
  }

  img:nth-child(2) {
    display: none;
  }

  img:nth-child(3) {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 18px;
    margin: 150px 0 120px;

    img:nth-child(2) {
      display: block;
    }

    img:nth-child(1) {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    gap: 30px;
    margin: 160px 0;
    img:nth-child(3) {
      display: block;
    }

    img:nth-child(2) {
      display: none;
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div {
    width: 100%;
    height: 174px;
    background: #F1F1F1;
    border-radius: 8px;
  }

  @media (min-width: 768px) {

    & > div {
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    gap: 32px;
  }
`;

const Other = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 120px 0;
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 40px;
  }
  
`;

const ProductImages = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  background-color: #F1F1F1;
  height: 120px;

  img:first-child {
    width: 50%;
    min-width: 90px;
    max-height: 100%;
  }

  img:nth-child(2), img:nth-child(3) {
    display: none;
  }

  @media (min-width: 768px) {
    height: 320px;

    img:first-child {
      display: none;
    }

    img:nth-child(2) {
      display: block;
      width: 100%;
      max-height: 100%;
      min-width: 140px;
    }
  }

  @media (min-width: 1024px) {

    img:nth-child(2) {
      display: none;
    }

    img:nth-child(3) {
      display: block;
      width: 100%;
      max-height: 100%;
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;