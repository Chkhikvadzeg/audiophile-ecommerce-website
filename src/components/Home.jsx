import Header from "./Header";
import NewItem from "./NewItem";
import NavLinks from './NavLinks'
import HomeItems from "./HomeItems";
import Advertisement from "./Advertisement";
import Footer from "./Footer";


const Home = (
  { isMenuOpen,
    setIsMenuOpen,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems
  }) => {
  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isCartOpen={isCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setIsCartOpen={setIsCartOpen}
        category="Home" />
      <NewItem />
      <NavLinks />
      <HomeItems />
      <Advertisement />
      <Footer category="Home" />
    </>
  );
}

export default Home;