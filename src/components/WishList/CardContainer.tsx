import styled from "@emotion/styled";

export const WishListContainer = () => {
  return (
    <Cont>
      <TitleCont>
        <Title>위시리스트</Title>
        <Quantity>3</Quantity>
      </TitleCont>
    </Cont>
  );
};

const Cont = styled.section`
  margin-top: 53px;
`;

const TitleCont = styled.header`
  display: flex;
  padding: 19px 0px;
  border-bottom: 1px solid #a1a1a1;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  color: #000000;
  margin-right: 17px;
`;
const Quantity = styled.span`
  font-weight: 700;
  font-size: 2.4rem;
  color: #000000;
`;
