import styled from "@emotion/styled";

export default function ProductsList() {
  return (
    <Header>
      <h2>카테고리</h2>
      <CategoryNav>
        <ul className="products-category-list">
          <li>전체</li>
          <li className="products-beauty">뷰티</li>
          <li className="products-bath current">욕실</li>
          <li className="products-kitchen">주방</li>
          <li className="products-etc">잡화</li>
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
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 29px;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
  }
`;

const CategoryNav = styled.nav`
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
    border: 1px solid #847258;
    border-collapse: collapse;
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
  }

  .current {
    color: #fff;
    background-color: #847258;
  }
`;
