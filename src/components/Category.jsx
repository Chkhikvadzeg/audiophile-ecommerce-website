import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Heading2 from '../styled-components/typography/Headings/Heading2'
import styled from 'styled-components'
import data from '../data.json'
import CategoryItem from './CategoryItem'
import NavLinks from './NavLinks'
import Advertisement from './Advertisement'
import Footer from './Footer'

export default function Category(
  { isMenuOpen,
    setIsMenuOpen,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems }
) {
  const { category } = useParams()
  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        category={category}
      />
      <CategoryName>{category}</CategoryName>
      <Items>
        {data.map((item, index) => {
          return item.category === category.toLowerCase() && <CategoryItem index={index} key={item.id} item={item} />
        })}
      </Items>
      <NavLinks />
      <Advertisement />
      <Footer category={category} />

    </>
  )
}

const CategoryName = styled(Heading2)`
  margin: 0 auto;
  text-align: center;
  padding: 32px 0;
  background-color: #000000;
  color: #FFFFFF;

  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin: 64px 0 120px;
`;