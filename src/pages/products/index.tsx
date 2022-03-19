import type { NextPage } from "next";
import styled from "@emotion/styled";
import ProductsList from "../../components/ProductsList";
import Product from "../../components/Product";

const ProductPage: NextPage = () => {
  return (
    <Container>
      <ProductsList />
      <ProductContainer>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductContainer>
    </Container>
  );
};

const Container = styled.section`
  padding-top: 72px;
  padding-left: 96px;
`;

const ProductContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  gap: 60px;
  padding-top: 41px;
`;

export default ProductPage;
