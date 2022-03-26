import type { NextPage } from "next";
import styled from "@emotion/styled";
import ProductsList from "../../components/ProductsList";
import Product from "../../components/Product";
import ItemsContainer from "../../components/shared/ItemsContainer";

const ProductPage: NextPage = () => {
  return (
    <Container>
      <ProductsList />
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
    </Container>
  );
};

const Container = styled.section`
  padding-top: 72px;
  padding-left: 96px;
`;

export default ProductPage;
