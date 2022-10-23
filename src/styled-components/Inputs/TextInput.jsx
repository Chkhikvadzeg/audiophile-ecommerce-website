import styled from 'styled-components';

const TextInput = (props) => {
  return (
    <Label
      isError={props?.errors?.[props.label]}
      htmlFor={props.id}
    >
      <LabelDiv isError={props?.errors?.[props.label]}>
        <span>{props.label}</span>
        {
          props?.errors?.[props.label]
          &&
          <Error isError={props?.errors?.[props.label]}>{props?.errors?.[props.label]?.message}</Error>
        }
      </LabelDiv>
      <Input
        onChange={props.onChange}
        {...props.register(props.label, {
          required: true,
        })}
        id={props.id}
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder} />
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: #000000;
  background: #FFFFFF;

`;

const Input = styled.input`
  padding: 0 24px;
  border: 1px solid #CFCFCF;
  border-radius: 8px;
  height: 56px;
  caret-color: #D87D4A;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
  
  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    color: rgba(0, 0, 0, 0.4);
  }
  
  &:focus {
    border-color: #D87D4A;
  }
  
`;

const LabelDiv = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  span {
    color: ${(props) => (props.isError ? '#CD2C2C' : '#000000')};
  }

`;

const Error = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.2px;
  color: ${(props) => (props.isError ? '#CD2C2C' : '#000000')};
`;

export default TextInput;