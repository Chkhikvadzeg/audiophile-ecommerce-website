import styled from "styled-components";

const SubHeading = styled.h4`
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  color: ${props => props.isError ? '#CD2C2C' : props.textColor};
`;

export default SubHeading;