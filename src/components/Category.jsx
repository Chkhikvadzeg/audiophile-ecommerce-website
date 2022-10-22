import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Heading2 from '../styled-components/typography/Headings/Heading2'
import styled from 'styled-components'

export default function Category({ isMenuOpen, setIsMenuOpen }) {
  const { category } = useParams()
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} category={category}></Header>
      <CategoryName>{category}</CategoryName>
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