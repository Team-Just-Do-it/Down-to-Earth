import styled from "@emotion/styled";

export default function UploadProducts() {
  return (
    <ProductImages>
      <ProductImage>
        <button type="button" className="img-remove">
          <span className="ir">이미지 삭제</span>
        </button>
      </ProductImage>
      <ProductImage>
        <button type="button" className="img-remove">
          <span className="ir">이미지 삭제</span>
        </button>
      </ProductImage>
      <ProductImage>
        <button type="button" className="img-remove">
          <span className="ir">이미지 삭제</span>
        </button>
      </ProductImage>
    </ProductImages>
  );
}

const ProductImages = styled.ul`
  display: flex;
  gap: 11px;
  overflow-x: scroll;
  margin-top: 32px;

  li {
    position: relative;
    width: 250px;
    height: 126px;
    background: #c4c4c4;
    border-radius: 10px;
    width: 304px;
    height: 228px;
    overflow: hidden;
    border: 0.5px solid var(--border-color);
  }
`;

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
