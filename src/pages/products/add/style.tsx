import styled from "@emotion/styled";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import PostEditor from "../../../components/Editor";
import UploadProducts from "../../../components/UploadProducts";
import ProductAddButton from "../../../components/shared/AddButton";
import { UploadProductProps } from "./index";
import InputField from "../../../components/InputField/InputField";

export default function UploadProduct(
  props: UploadProductProps
): EmotionJSX.Element {
  const {
    category,
    name,
    price,
    quantity,
    description,
    discount,
    images,
    shipping,
    handleImage,
  } = props;

  return (
    <Container>
      <h1 className="ir">상품등록 페이지</h1>
      <h2>상품등록</h2>
      <ProductForm>
        <section className="basicInfo-box">
          <BasicInfo>
            <legend>기본 정보</legend>
            <select
              name="category"
              className="product-category"
              onChange={(ev) => category(ev)}
            >
              <option value="none"> == 카테고리 ==</option>
              <option value="beauty">뷰티</option>
              <option value="bath">욕실</option>
              <option value="kitchen">주방</option>
              <option value="etc">잡화</option>
            </select>

            <InputField
              type="text"
              labelName="productName"
              placeholder="상품명"
              controller={name}
            />

            <InputField
              type="text"
              labelName="productQuantity"
              placeholder="수량"
              controller={quantity}
            />
          </BasicInfo>

          <PostEditor onChange={description} />
        </section>

        <PriceWrapper>
          <PriceInfo>
            <legend>가격정보</legend>

            <InputField
              type="text"
              labelName="price"
              placeholder="판매가"
              controller={price}
            />
            <InputField
              type="text"
              labelName="discountPrice"
              placeholder="할인가"
              controller={discount}
            />
            <InputField
              type="text"
              labelName="shippingFee"
              placeholder="배송비"
              controller={shipping}
            />
          </PriceInfo>
          <ImageContainer>
            <div className="image-title">
              <h3>상품 이미지</h3>
              <label htmlFor="imgUpload">이미지 추가</label>
              <input
                type="file"
                accept="image/*"
                id="imgUpload"
                className="ir"
                onChange={handleImage}
              />
            </div>
            <section className="upload-photo-list">
              <h4 className="ir">추가된 사진</h4>
              <UploadProducts images={images} />
            </section>
          </ImageContainer>
        </PriceWrapper>
      </ProductForm>
      <ProductAddButton type="button">등록하기</ProductAddButton>
    </Container>
  );
}
const Container = styled.div`
  margin: 72px 0 59px 96px;
  width: 100%;
  height: 100%;

  .ir {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 35px;
    color: #000000;
  }
`;

const ProductForm = styled.form`
  display: flex;
  h3 {
    margin: 59px 0 21px;
    font-weight: 700;
    font-size: 2rem;
    line-height: 29px;
    color: #000000;
  }

  legend {
    margin: 59px 0 21px;
    font-weight: 700;
    font-size: 2rem;
    line-height: 29px;
    color: #000000;
  }
`;

const BasicInfo = styled.fieldset`
  margin: 59px 0 21px;

  .product-category,
  input {
    margin: 10px;
    padding: 11px 24px;
    border: 1px solid #a2a2a2;
    background: #ffffff;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #666666;
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
    font-size: 1.8rem;
    line-height: 26px;
    color: #666666;
    background: #e5e5e5;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const PriceInfo = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 59px 0 21px;

  input {
    width: 100%;
    margin-top: 16px;
    padding: 11px 22px;
    font-weight: 400;
    font-size: 2rem;
    line-height: 29px;
  }
`;

const PriceWrapper = styled.section`
  margin-left: 60px;
`;
