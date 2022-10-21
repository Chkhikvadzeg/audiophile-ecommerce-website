import styled from "styled-components";

const Heading1 = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: ${(props) => props.textColor || "#000000"};

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
  }
`;

export default Heading1;