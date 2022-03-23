import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";

type ButtonType = "button" | "reset" | "submit";

type ButtonProps = {
  type: ButtonType;
  color?: string;
  flex?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

type ButtonColor = {
  [index: string]: any;
  main: SerializedStyles;
  dark: SerializedStyles;
};

const COLORS: ButtonColor = {
  main: css`
    --button-color: #ffffff;
    --button-bg-color: #847258;
  `,
  dark: css`
    --button-color: #ffffff;
    --button-bg-color: #666666;
  `,
};

type DisplayStyle = {
  [index: string]: any;
  start: SerializedStyles;
  center: SerializedStyles;
  end: SerializedStyles;
};

const FLEX: DisplayStyle = {
  start: css`
    align-self: start;
  `,
  center: css`
    align-self: start;
  `,
  end: css`
    align-self: end;
  `,
};

function CommentButton({
  type,
  color = "main",
  flex = "start",
  children,
  onClick,
}: ButtonProps) {
  const colorStyle = COLORS[color];
  const flexStyle = FLEX[flex];

  return (
    <StyledButton
      type={type}
      color={colorStyle}
      flex={flexStyle}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

interface ContainerTypeProps {
  color: string;
  flex: string;
}

const StyledButton = styled.button<ContainerTypeProps>`
  ${(props) => props.color};
  ${(props) => props.flex};

  width: 170px;
  height: 31px;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  line-height: 26px;
  border-radius: 2px;
  background: var(--button-bg-color, #847258);
  color: var(--button-color, #ffffff);

  cursor: pointer;
`;

export default CommentButton;
