import styled from "@emotion/styled";
import { HTMLInputTypeAttribute } from "react";

interface InputFieldProps {
  placeholder: string;
  labelName: string;
  type: HTMLInputTypeAttribute;
  controller: any;
}

export default function InputField({
  placeholder,
  labelName,
  type,
  controller: { value, onChange },
}: InputFieldProps) {
  return (
    <InputLabel htmlFor={labelName}>
      <input
        name={labelName}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="on"
      />
    </InputLabel>
  );
}

const InputLabel = styled.label`
  input {
    margin: 10px;
    padding: 11px 22px;
    font-weight: 400;
    font-size: 2rem;
    line-height: 29px;
    border: 1px solid #a2a2a2;
    background: #ffffff;
    color: #666666;
  }
`;
