import styled from "@emotion/styled";
import UploadProductEntry from "../UploadProductEntry";

export default function UploadProducts() {
  return (
    <ProductImages>
      <UploadProductEntry />
      <UploadProductEntry />
      <UploadProductEntry />
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
  }
`;
