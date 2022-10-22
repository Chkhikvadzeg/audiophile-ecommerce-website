import Header from "./Header";
import NewItem from "./NewItem";
import NavLinks from './NavLinks'
import HomeItems from "./HomeItems";
import Advertisement from "./Advertisement";
import Footer from "./Footer";


const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} category="Home" />
      <NewItem />
      <NavLinks />
      <HomeItems />
      <Advertisement />
      <Footer category="Home" />
    </>
  );
}

export default Home;