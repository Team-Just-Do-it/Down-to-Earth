import styled from "@emotion/styled";

interface UploadProductEntryProps {
  image: string;
}

export default function UploadProductEntry(props: UploadProductEntryProps) {
  const { image } = props;

  return (
    <ProductImage>
      <img src={image} alt="seller-product-image" />
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
