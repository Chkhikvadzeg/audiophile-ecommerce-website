import styled from "styled-components";

const Heading5 = styled.h5`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  color: ${props => props.color ? props.color : "#000000"};

  span{ 
    color: #D87D4A;
  } 
`;

export default Heading5;