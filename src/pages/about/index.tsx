import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "next/image";
import Event from "../../components/Event";
import Product from "../../components/Product";

const MainPage: NextPage = () => {
  return (
    <>
      <Image
        src="/assets/Banner_sample.png"
        alt="메인 이미지"
        width="100"
        height="24"
        layout="responsive"
      />
      <Container>
        <Title>추천 상품</Title>
        <ProductContainer>
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductContainer>
        <Title>이벤트</Title>
        <EventContainer>
          <Event />
          <Event />
          <Event />
        </EventContainer>
      </Container>
    </>
  );
};

const Container = styled.section`
  padding-left: 96px;
`;

const Title = styled.h2`
  margin-top: 41px;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 34px;
`;

const ProductContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  gap: 60px;
  margin-top: 41px;
  margin-bottom: 18px;
`;

const EventContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 60px;
  padding-top: 41px;
`;

export default MainPage;
