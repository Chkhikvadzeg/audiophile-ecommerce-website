import Header from "./Header";
import NewItem from "./NewItem";
import NavLinks from './NavLinks'
import HomeItems from "./HomeItems";


const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} category="Home" />
      <NewItem />
      <NavLinks />
      <HomeItems />
    </>
  );
}

export default Home;