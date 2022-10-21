import Header from "./Header";
import NewItem from "./NewItem";
import NavLinks from './NavLinks'


const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} category="Home" />
      <NewItem />
      <NavLinks />

    </div>
  );
}

export default Home;