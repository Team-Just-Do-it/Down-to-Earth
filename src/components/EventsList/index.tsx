import styled from "@emotion/styled";

export default function EventsList() {
  return (
    <Header>
      <h2>이벤트</h2>
      <CategoryNav>
        <ul className="events-category-list">
          <li className="current">전체</li>
          <li className="events-promotion">프로모션</li>
          <li className="events-collaboration">콜라보레이션</li>
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

const CategoryNav = styled.nav`
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
    border: 1px solid #847258;
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
  }

  .current {
    color: #fff;
    background-color: #847258;
  }
`;
