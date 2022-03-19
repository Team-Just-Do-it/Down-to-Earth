import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { Layout } from "../components/layouts";
import styled from "@emotion/styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
