import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

export default function Category() {
  const { category } = useParams()
  return (
    <>
      <Header category={category}></Header>
      <div>{category}</div>
    </>
  )
}
