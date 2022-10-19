import styled from "styled-components";
import { useState } from "react";

const NumberInput = (props) => {
  const [value, setValue] = useState(props.value || 0);
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <Container>
      <button onClick={decrement}>-</button>
      <span type="number">{value}</span>
      <button onClick={increment}>+</button>
    </Container>
  );
}

const Container = styled.div`
  background: #F1F1F1;
  width: 120px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  padding: 0 16px;
  color: #000000;

  button {
    color: rgba(0, 0, 0, 0.5);
    background: none;
    border: none;
    cursor: pointer;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;

    &:hover {
      color: #D87D4A;
    }
  }
`;

export default NumberInput;