import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
      {isMenuOpen && <BlackScreen onClick={() => setIsMenuOpen(false)}>Menu</BlackScreen>}
    </>
  );
}

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
