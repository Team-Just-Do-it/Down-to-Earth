import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";

interface categoryProps {
  curCategory: number;
}

export default function ProductsList() {
  const [curCategory, setCurCategory] = useState(1);
  const categories = ["all", "beauty", "bath", "kitchen", "etc"];

  const router = useRouter();

  const handleClick = (category: number) => {
    setCurCategory(category);
    router.push(`/products?category=${categories[category - 1]}`);
  };

  return (
    <Header>
      <h2>카테고리</h2>
      <CategoryNav curCategory={curCategory}>
        <ul className="products-category-list">
          <li onClick={() => handleClick(1)}>전체</li>
          <li onClick={() => handleClick(2)}>뷰티</li>
          <li onClick={() => handleClick(3)}>욕실</li>
          <li onClick={() => handleClick(4)}>주방</li>
          <li onClick={() => handleClick(5)}>잡화</li>
        </ul>
      </CategoryNav>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  margin-bottom: 68px;

  h2 {
    margin-bottom: 29px;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 29px;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
  }
`;

const CategoryNav = styled.nav<categoryProps>`
  width: 100%;
  max-width: 600px;

  .products-category-list {
    display: flex;
    height: 50px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    margin-left: -1px;
    border: 1px solid #847258;
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    &:nth-of-type(${(props) => props.curCategory}) {
      color: #fff;
      background-color: #847258;
    }
  }
`;
