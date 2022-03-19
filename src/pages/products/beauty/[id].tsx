import { useRouter } from "next/router";
import styled from "@emotion/styled";
import ProductsList from "../../../components/productsList";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Main>
      <h1 className="ir">상품 디테일 페이지</h1>
      <ProductsList />

      <section className="product-info-wrap">
        <ImageWrapper>
          <div className="product-main">main Image</div>
          <div className="product-main-subimages">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </ImageWrapper>
        <ProductInfo>
          <h3>브랜드 명</h3>
          <h4>뽀득뽀득 고체치약</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, a
            impedit! Nisi possimus, ad molestiae tempore, eius corrupti odit
            velit harum alias repudiandae quidem assumenda! Dolor libero
            repudiandae quasi soluta?
          </p>
        </ProductInfo>
      </section>
      <ReviewWrapper>리뷰</ReviewWrapper>
    </Main>
  );
}

const ProductInfo = styled.div``;

const ImageWrapper = styled.div`
  .product-main {
    width: 500px;
    height: 500px;
    background-color: #c4c4c4;
    border-radius: 10px;
    margin: 0 94px 14px 0;
  }
  .product-main-subimages {
    width: 100%;
    height: 80px;
    display: flex;

    div {
      width: 80px;
      height: 80px;
      margin-right: 15px;
      background-color: #c4c4c4;
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 150px; // navbar 공간
  margin-left: 96px;

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  .product-info-wrap {
    display: flex;
    align-items: center;
  }
`;

const ReviewWrapper = styled.section``;
