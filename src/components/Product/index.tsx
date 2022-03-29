import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Product = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };
  return (
    <ProductContainer>
      <Link href="/products/1">
        <a>
          <ProductImage
            src="/assets/sample_product.png"
            alt="상품 사진"
            width="270px"
            height="270px"
          />
          <ProductContents>
            <li className="product-content">
              <ProductHeader>
                <ProductCategory>카테고리 | 브랜드명</ProductCategory>
                <Image
                  src={isLiked ? "/assets/like_fill.png" : "/assets/like.png"}
                  width="20px"
                  height="17px"
                  onClick={handleLike}
                />
              </ProductHeader>
            </li>
            <li className="product-content">상품 이름</li>
            <li className="product-content">20,000원</li>
          </ProductContents>
        </a>
      </Link>
    </ProductContainer>
  );
};

const ProductContainer = styled.section`
  width: 270px;
  height: 377px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled(Image)`
  border-radius: 10px;
`;

const ProductContents = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 700;

  .product-content {
    margin-top: 4px;
    &:nth-of-type(2) {
      font-size: 24px;
      line-height: 34px;
      color: #000000;
    }
    &:nth-of-type(3) {
      font-size: 18px;
      line-height: 26px;
      color: #847258;
    }
    Image {
      padding: 10px;
    }
  }
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductCategory = styled.div`
  font-size: 14px;
  color: #a2a2a2;
  margin-top: 4px;
  margin-bottom: 1px;
`;

export default Product;
