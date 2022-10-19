import Button1 from "./Button1";
import styled from "styled-components";

const Button2 = styled(Button1)`
  border-color: #000000;
  background: #FFFFFF;
  color: #000000;

  &:hover{
    background: #000000;
    color: #FFFFFF;
  }
`;

export default Button2;