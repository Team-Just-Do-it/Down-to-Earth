import styled from "@emotion/styled";

export default function UploadProductEntry() {
  return (
    <ProductImage>
      <button type="button" className="img-remove">
        <span className="ir">이미지 삭제</span>
      </button>
    </ProductImage>
  );
}

const ProductImage = styled.li`
  .img-remove {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 22px;
    height: 22px;
    background: url("/assets/close.png");
    background-size: contain;
  }
`;
