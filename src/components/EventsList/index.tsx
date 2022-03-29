import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import theme from "../../styles/theme";

interface categoryProps {
  curCategory: number;
}

export default function EventsList() {
  const [curCategory, setCurCategory] = useState<number>(1);
  const categories: string[] = ["all", "promotion", "collaboration"];

  const router = useRouter();

  const handleClick = (category: number) => {
    setCurCategory(category);
    router.push(`/events?category=${categories[category - 1]}`);
  };

  return (
    <Header>
      <h2>이벤트</h2>
      <CategoryNav curCategory={curCategory}>
        <ul className="events-category-list">
          <li onClick={() => handleClick(1)}>전체</li>
          <li onClick={() => handleClick(2)}>프로모션</li>
          <li onClick={() => handleClick(3)}>콜라보레이션</li>
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
  }
`;

const CategoryNav = styled.nav<categoryProps>`
  width: 100%;
  max-width: 600px;

  .events-category-list {
    display: flex;
    height: 50px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    margin-left: -1px;

    border: 1px solid ${theme.mainColor};
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    &:nth-of-type(${(props) => props.curCategory}) {
      color: #fff;
      background-color: ${theme.mainColor};
    }
  }
`;
