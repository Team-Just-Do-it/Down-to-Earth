/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";

type ButtonType = "button" | "reset" | "submit";

type ButtonProps = {
  type: ButtonType;
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

type ButtonColor = {
  [index: string]: any;
  light: SerializedStyles;
  main: SerializedStyles;
  dark: SerializedStyles;
};

const COLORS: ButtonColor = {
  light: css`
    --button-color: #ffffff;
    --button-bg-color: #b0a69c;
  `,
  main: css`
    --button-color: #ffffff;
    --button-bg-color: #847258;
  `,
  dark: css`
    --button-color: #ffffff;
    --button-bg-color: #666666;
  `,
};

type SizeProps = {
  width?: number;
  height?: number;
  fontWeight?: number;
  fontSize?: number;
  lineHeight?: number;
};

function Button({ type, color = "main", children, onClick }: ButtonProps) {
  const colorStyle = COLORS[color];

  return (
    <StyledButton type={type} color={colorStyle} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<SizeProps>`
  ${(props) => props.color};
  width: ${(props) => (props.width ? `${props.width}px` : "107px")};
  height: ${(props) => (props.height ? `${props.width}px` : "34px")};
  margin: 0;
  text-align: center;
  border: none;
  background: var(--button-bg-color, #847258);
  color: var(--button-color, #ffffff);
  cursor: pointer;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "18px")};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "18px"};
`;

export default Button;
