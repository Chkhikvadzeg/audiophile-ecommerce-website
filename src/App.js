import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Product from "./components/Product";
import Checkout from "./components/Checkout";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <Home
            cartItems={cartItems}
            setCartItems={setCartItems}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        } />
        <Route path="/:category" element={
          <Category
            cartItems={cartItems}
            setCartItems={setCartItems}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />}
        />
        <Route path="/:product/:id" element={
          <Product
            cartItems={cartItems}
            setCartItems={setCartItems}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen} />}
        />
        <Route path="/checkout" element={
          <Checkout
            cartItems={cartItems}
            setCartItems={setCartItems}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            setIsConfirmationOpen={setIsConfirmationOpen}
          />}
        />
      </Routes>
      <GlobalStyle
        isCartOpen={isCartOpen}
        isMenuOpen={isMenuOpen}
        isConfirmationOpen={isConfirmationOpen}
      />
      {(isMenuOpen || isCartOpen || isConfirmationOpen) && <BlackScreen isConfirmationOpen={isConfirmationOpen} onClick={() => {
        setIsMenuOpen(false);
        setIsCartOpen(false);
      }} />}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.5);
  }

  body {
    overflow: ${props => props.isMenuOpen || props.isCartOpen || props.isConfirmationOpen ? 'hidden' : 'auto'};
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`

const BlackScreen = styled.div`
  position: fixed;
  top: ${props => props.isConfirmationOpen ? '0' : '91px'};
  left: 0;
  height: ${props => props.isConfirmationOpen ? '100vh' : 'calc(100vh - 91px)'};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default App;
