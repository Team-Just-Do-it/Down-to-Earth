import type { NextPage } from "next";
import styled from "@emotion/styled";
import ProductsList from "../../components/ProductsList";
import Product from "../../components/Product";
import ItemsContainer from "../../components/shared/ItemsContainer";
import { fetcher } from "../../utils/fetcher";
import { useEffect, useState } from "react";
import productDataProps from "../../interfaces/ProductData.interface";

const ProductPage: NextPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetcher("/products?populate=*").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Container>
      <ProductsList />
      <ItemsContainer itemLength={4} itemWidth={"270px"} itemGap={"60px"}>
        {products.map((product: productDataProps, index) => {
          return (
            <Product
              key={`product_${index}`}
              productId={product.id}
              productName={product.attributes.name}
              productPrice={product.attributes.price}
              productBrand={product.attributes.brand_name}
              productCategory={
                product.attributes.product_category.data.attributes.name
              }
              productLike={product.attributes.is_liked}
              productImage={
                product.attributes.product_image.data[0].attributes.image_url
              }
            ></Product>
          );
        })}
      </ItemsContainer>
    </Container>
  );
};

const Container = styled.section`
  padding-top: 72px;
  padding-left: 96px;
`;

export default ProductPage;
