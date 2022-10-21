import { Route, Routes } from "react-router-dom";
import { Home, Headphones, Speakers, Earphones } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Headphones" element={<Headphones />} />
      <Route path="/Speakers" element={<Speakers />} />
      <Route path="/Earphones" element={<Earphones />} />
    </Routes>
  );
}

export default App;
