import styled from "@emotion/styled";
import UploadProducts from "../../components/UploadProducts";

export default function UploadProduct() {
  return (
    <Container>
      <h1 className="ir">상품등록 페이지</h1>
      <h2>상품등록</h2>

      <Main>
        <BasicInfo>
          <h3>기본 정보</h3>
          <div>상품등록 페이지 !</div>
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
    </Container>
  );
}

const BasicInfo = styled.div``;

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
`;
