import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
}

export default App;
