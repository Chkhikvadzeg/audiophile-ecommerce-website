import { Link } from "react-router-dom";
import styled from "styled-components";

const Button3 = styled(Link)`
  cursor: pointer;
  background: none;
  border: none;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  gap: 12px;
  display: flex;
  align-items: center;
  transition: all .2s ease-in-out;

  &:hover{
    color: #D87D4A;
  }
`;

export default Button3;