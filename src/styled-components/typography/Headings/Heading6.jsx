import styled from "styled-components";

const Heading2 = styled.h2`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.07px;
  text-transform: uppercase;
  color: ${props => props.color ? props.color : "#000000"};

  span{ 
    color: #D87D4A;
  } 

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.3px;
  } 
`;

export default Heading2;