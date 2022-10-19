import styled from "styled-components";

const Heading4 = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => props.color ? props.color : "#000000"};

  span{ 
    color: #D87D4A;
  }

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.4px;
  }
`;

export default Heading4;