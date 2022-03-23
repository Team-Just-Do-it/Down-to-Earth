import styled from "@emotion/styled";
import PoseEitor from "../../components/Editor";
import UploadProducts from "../../components/UploadProducts";

export default function UploadProduct() {
  return (
    <Container>
      <h1 className="ir">상품등록 페이지</h1>
      <h2>상품등록</h2>

      <Main>
        <BasicInfo>
          <h3>기본 정보</h3>
          <select name="category" className="product-category">
            <option value="none">카테고리</option>
            <option value="beauty">뷰티</option>
            <option value="bath">욕실</option>
            <option value="kitchen">주방</option>
            <option value="etc">잡화</option>
          </select>

          <input type="text" placeholder="상품명" className="product-name" />
          <input type="text" placeholder="수량" />

          <PoseEitor />
        </BasicInfo>

        <PriceWrapper>
          <h3>가격 정보</h3>
          <PriceInfo>
            <input type="text" placeholder="판매가" />
            <input type="text" placeholder="할인가" />
            <input type="text" placeholder="배송비" />
          </PriceInfo>
          <ImageContainer>
            <div className="image-title">
              <h3>상품 이미지</h3>
              <label htmlFor="imgUpload">이미지 추가</label>
              <input
                type="file"
                accept="imgage/*"
                id="imgUpload"
                className="ir"
              />
            </div>
            <section className="upload-photo-list">
              <h4 className="ir">추가된 사진</h4>
              <UploadProducts />
            </section>
          </ImageContainer>
        </PriceWrapper>
      </Main>
      <button type="button" className="product-submit">
        등록하기
      </button>
    </Container>
  );
}

const BasicInfo = styled.div`
  h3 {
    margin: 59px 0 21px;
  }

  .product-category,
  input {
    margin: 10px;
    padding: 11px 24px;
    border: 1px solid #a2a2a2;
  }

  .product-name {
    width: 338px;
  }
`;

const ImageContainer = styled.div`
  margin-top: 57px;

  .image-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 146px;
    height: 35px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #666666;
    background: #e5e5e5;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 16px;
    padding: 11px 22px;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
  }
`;

const PriceWrapper = styled.div`
  margin-left: 60px;
`;

const Main = styled.main`
  display: flex;
  h3 {
    margin: 59px 0 21px;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #000000;
  }
`;

const Container = styled.header`
  margin: 72px 0 59px 96px;
  width: 100%;
  height: 100%;

  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
  }

  .product-submit {
    display: block;
    width: 280px;
    height: 50px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    background: #847258;
    color: #ffffff;
    margin: 120px 25%;
  }
`;
