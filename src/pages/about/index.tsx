import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "next/image";
import Event from "../../components/Event";
import Product from "../../components/Product";
import ItemsContainer from "../../components/shared/ItemsContainer";

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
        <ItemsContainer
          listTitle="추천 상품"
          itemLength={4}
          itemWidth={"270px"}
          itemGap={"60px"}
        >
          <Product />
          <Product />
          <Product />
          <Product />
        </ItemsContainer>

        <ItemsContainer
          listTitle="이벤트"
          itemLength={3}
          itemWidth={"380px"}
          itemGap={"60px"}
        >
          <Event />
          <Event />
          <Event />
        </ItemsContainer>
      </Container>
    </>
  );
};

const Container = styled.section`
  padding-left: 96px;

  & > div {
    margin-top: 40px;
  }
`;

export default MainPage;
