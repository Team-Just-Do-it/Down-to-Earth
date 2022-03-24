import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

const style = css`
  ${emotionReset}
  html,
  body, #__next {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    font-style: thin;
    font-weight: 200;
    src: url("/fonts/NotoSansKR-Thin.otf") format("opentype");
  }

  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    font-style: light;
    font-weight: 300;
    src: url("/fonts/NotoSansKR-Light.otf") format("opentype");
  }

  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    font-style: medium;
    font-weight: 500;
    src: url("/fonts/NotoSansKR-Medium.otf") format("opentype");
  }

  @font-face {
    font-family: "Noto Sans KR", serif;
    font-style: bold;
    font-weight: 600;
    src: url("/fonts/NotoSansKR-Bold.otf") format("opentype");
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
