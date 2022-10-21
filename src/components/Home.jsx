import Header from "./Header";
import NewItem from "./NewItem";
import NavLinks from './NavLinks'


const Home = () => {
  return (
    <div>
      <Header category="Home" />
      <NewItem />
      <NavLinks />

    </div>
  );
}

export default Home;