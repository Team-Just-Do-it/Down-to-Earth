import styled from "@emotion/styled";
//import ProductsList from "../ProductsList";
import ProductReview from "../ProductReviewList";

export default function ProductDetail() {
  return (
    <Main>
      <h1 className="ir">상품 디테일 페이지</h1>
      {/*<ProductsList />*/}

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
          <h3 className="product-brand">브랜드 명</h3>
          <h4 className="product-title">뽀득뽀득 고체치약</h4>

          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, a
            impedit! Nisi possimus, ad molestiae tempore, eius corrupti odit
            velit harum alias repudiandae quidem assumenda! Dolor libero
            repudiandae quasi soluta?
          </p>
          <PriceWrapper>
            <NormalPriceInfo>
              <span className="title">판매가</span>
              <span className="price">6,000원</span>
            </NormalPriceInfo>
            <SalePriceInfo>
              <span className="title">할인가</span>
              <span className="price">4,000원</span>
            </SalePriceInfo>
          </PriceWrapper>

          <QuantityWrapper>
            <span className="quantity-title">수량</span>

            <div className="quantity-container">
              <ControlQuantity>
                <button className="minus-button"></button>
                <input
                  type="number"
                  className="product-quantity"
                  name="product-quantity"
                  defaultValue="0"
                />
                <button className="plus-button"></button>
              </ControlQuantity>

              <TotalProductPrice>
                <span className="products-price-title">합계</span>
                <span className="products-price-total">8,000</span>
                <span className="products-price-currency">원</span>
              </TotalProductPrice>
            </div>

            <ShippingWrapper>
              <span>배송비</span>
              <div className="currency-box">
                <span className="shipping-price">2,500</span>
                <span className="shipping-currency">원</span>
              </div>
            </ShippingWrapper>
          </QuantityWrapper>
          <TotalPrice>
            <span className="total-price-title">총 금액</span>
            <div>
              <span className="total-price-number">10,500</span>
              <span className="currency">원</span>
            </div>
          </TotalPrice>
          <PurchaseContainer>
            <button className="purchase-button">구매하기</button>
            <button className="cart-button">장바구니</button>
            <button className="like-button">
              <img src="/assets/like.png" alt="like-button" />
            </button>
            <button className="share-button">
              <img src="/assets/share.png" alt="like-button" />
            </button>
          </PurchaseContainer>
        </ProductInfo>
      </section>
      <ProductReview />
    </Main>
  );
}

const PurchaseContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 63px;

  .purchase-button,
  .cart-button {
    width: 217px;
    height: 50px;
    margin-right: 20px;
    background: #847258;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #ffffff;
  }

  .cart-button {
    background: #b0a69c;
  }

  .like-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
    img {
      width: 32px;
      height: 28px;
    }
  }

  .share-button {
    width: 40px;
    height: 40px;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 557px;
  margin-top: 60px;

  .total-price-title {
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #000000;
    padding-left: 23px;
  }

  .total-price-number {
    font-weight: 700;
    font-size: 34px;
    line-height: 49px;
    text-align: right;
    color: #847258;
  }

  .currency {
    font-weight: 400;
    padding: 0 32px 0 6px;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #000000;
  }
`;

const TotalProductPrice = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0;
  }

  .products-price-title {
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    color: #666666;
  }

  .products-price-total {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    margin-left: 20px;
    color: #000000;
  }

  .products-price-currency {
    margin: 0 32px 0 6px;
  }
`;

const ShippingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: relative;

  span {
    padding: 36px 0 32px 21px;
  }

  .currency-box {
    display: flex;
  }

  .shipping-currency {
    padding: 0;
    font-weight: 400;
    padding: 0 32px 0 6px;
  }
  .shipping-price {
    padding: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
  }
`;

const QuantityWrapper = styled.div`
  width: 557px;
  height: 225px;
  background: #f1f1f1;
  position: relative;
  border-radius: 10px;
  margin-top: 36px;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    position: absolute;
    bottom: -38px;
    height: 1px;
    margin-top: 38px;
    background-color: #a1a1a1;
  }

  span {
    display: block;
    padding: 17px 0 32px 21px;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
  }

  .quantity-container {
    display: flex;
    justify-content: space-between;
    span {
      padding: 0;
    }
  }

  .quantity-title::after {
    content: "";
    position: absolute;
    display: block;
    width: calc(100% - 53px);
    position: absolute;
    height: 1px;
    margin-top: 9px;
    background-color: #a1a1a1;
  }
`;

const ControlQuantity = styled.div`
  display: flex;
  width: 155px;
  height: 50px;
  padding-left: 28px;

  .product-quantity {
    width: 100%;
    border: 1px solid #847258;
    border-collapse: collapse;
    outline: none;
    text-align: center;
    background-color: #fff;
    font-size: 20px;
    color: #000000;
  }

  .minus-button {
    width: 50px;
    border: 1px solid #847258;
    outline: 0;
    background: url("/assets/minus.png") no-repeat center;
    background-color: #fff;
    cursor: pointer;
  }

  .plus-button {
    width: 50px;
    border: 1px solid #847258;
    outline: 0;
    background: url("/assets/plus.png") no-repeat center;
    background-color: #fff;
    cursor: pointer;
  }
`;

const ProductInfo = styled.div`
  .product-brand {
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    color: #666666;
  }

  .product-title {
    line-height: 43px;
    font-size: 30px;
    color: #000000;
    margin: 16px 0 26px 0;
  }

  .product-description {
    font-style: normal;
    font-size: 20px;
    line-height: 29px;
    color: #666666;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 348px;
  height: 130px;
  border: 1px solid #847258;
  margin-top: 22px;

  .sale-price {
    width: 174px;
    height: 129px;
  }
`;

const NormalPriceInfo = styled.div`
  width: 174px;
  height: 129px;
  padding: 29px 0 0 20px;
  border-right: 1px solid #847258;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  .title {
    display: block;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #666666;
  }

  .price {
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    color: #666666;
  }
`;

const SalePriceInfo = styled.div`
  width: 174px;
  height: 129px;
  padding: 29px 0 0 17px;
  border-right: 1px solid #847258;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  .title {
    display: block;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #666666;
  }

  .price {
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    color: #666666;
  }
`;

const ImageWrapper = styled.div`
  .product-main {
    width: 500px;
    height: 500px;
    background-color: #c4c4c4;
    border-radius: 10px;
    margin: 0 94px 14px 0;
  }
  .product-main-subimages {
    display: flex;
    width: 100%;
    height: 80px;

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
  margin-left: 95px;

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
