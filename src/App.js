import Button1 from "./styled-components/Inputs/Buttons/Button1";
import Button2 from "./styled-components/Inputs/Buttons/Button2";
import Button3 from "./styled-components/Inputs/Buttons/Button3";
import ArrowRight from './assets/shared/desktop/icon-arrow-right.svg';

function App() {
  return (
    <>
      <Button1>Button1</Button1>
      <Button2>Button2</Button2>
      <Button3>Button3 <img src={ArrowRight} alt="Arrow right" /></Button3>
    </>
  );
}

export default App;
