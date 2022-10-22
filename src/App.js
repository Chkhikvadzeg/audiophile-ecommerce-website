import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
        <Route path="/:category" element={<Category isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
      </Routes>
      <GlobalStyle isMenuOpen={isMenuOpen} />
      {isMenuOpen && <BlackScreen onClick={() => setIsMenuOpen(false)} />}
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
    overflow: ${props => props.isMenuOpen ? 'hidden' : 'auto'};
  }
`

const BlackScreen = styled.div`
  position: fixed;
  top: 91px;
  left: 0;
  height: calc(100% - 91px);
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default App;
