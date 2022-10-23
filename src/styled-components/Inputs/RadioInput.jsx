import styled from "styled-components";

const RadioInput = (props) => {

  return (
    <Label onClick={props.onClick} htmlFor={props.id}>
      <Input {...props.register(props.name, { required: true })} id={props.id} type="radio" name={props.name} value={props.value} />
      <CustomInput />
      <Border />
      <span>{props.label}</span>
    </Label>
  );
}


const Label = styled.label`
  background: #FFFFFF;
  border-radius: 8px;
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  position: relative;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    color: #000000;
  }

`
const Input = styled.input`
  display: none;
`

const CustomInput = styled.div`
  width: 20px; 
  aspect-ratio: 1;
  border: 1px solid #CFCFCF;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    background: #D87D4A;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  ${Input}:checked + & {
    border-color: #D87D4A;

    &::after {
      opacity: 1;
    }
  }
`

const Border = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  border: 1px solid #CFCFCF;

  ${Input}:checked + ${CustomInput} + & {
    border-color: #D87D4A;
  }

  &:hover {
    border-color: #D87D4A;
  }
`;

export default RadioInput;