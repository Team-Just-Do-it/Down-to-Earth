import styled from "@emotion/styled";
import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <BodyContent>
        <Container>{children}</Container>
      </BodyContent>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
`;

const BodyContent = styled.main`
  padding-bottom: 100px;
`;

const Container = styled.section`
  padding-bottom: 100px;
`;
