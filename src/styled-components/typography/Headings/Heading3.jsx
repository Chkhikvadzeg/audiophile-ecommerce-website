import styled from "styled-components";

const Heading3 = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.85px;
  text-transform: uppercase;
  color: ${props => props.color ? props.color : "#000000"};

  span{ 
    color: #D87D4A;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.15px;
  }
`;

export default Heading3;