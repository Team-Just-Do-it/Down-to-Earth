import styled from "@emotion/styled";
import UploadProductEntry from "../UploadProductEntry";
import { UploadReturnObj } from "../../types/type";

interface UploadProductsProp {
  images: UploadReturnObj[] | [];
}

export default function UploadProducts(props: UploadProductsProp) {
  const { images } = props;

  return (
    <ProductImages>
      {images.map((image, itemIndex) => {
        const { id, url }: { id: string; url: string } = image;
        return <UploadProductEntry key={`${itemIndex}+${id}`} image={url} />;
      })}
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
