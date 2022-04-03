import styled from "@emotion/styled";
import { ChangeEvent } from "react";

type ButtonType = "button" | "reset" | "submit";

interface ProductAddProps {
  type: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ProductAddButton({
  type,
  children,
  onClick,
}: ProductAddProps) {
  return (
    <AddButton type={type} className="product-submit" onClick={onClick}>
      {children}
    </AddButton>
  );
}

const AddButton = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  background: #847258;
  color: #ffffff;
  margin: 120px 25%;
`;
