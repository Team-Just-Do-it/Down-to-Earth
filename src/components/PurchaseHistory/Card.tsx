import styled from "@emotion/styled";

export const PurChaseHistoryCard = () => {
  return (
    <Cont>
      <OrderDate>2022.02.02</OrderDate>
      <InfoCont>
        <ImgCont>
          <img />
        </ImgCont>
        <NameCont>
          <BrandName>브랜드명</BrandName>
          <ProductName>상품명</ProductName>
        </NameCont>
      </InfoCont>
      <Quantity>2</Quantity>
      <Price>
        <span>8,000</span>
        <strong>원</strong>
      </Price>
      <ShipmentState>상품준비중</ShipmentState>
      <ReviewBtn>리뷰작성</ReviewBtn>
    </Cont>
  );
};

const Cont = styled.article`
  display: flex;
  align-items: center;
  padding: 22px 52px;
  width: 100%;
  border-bottom: 1px solid #a1a1a1;
`;

const OrderDate = styled.p`
  font-weight: 400;
  font-size: 2rem;
  margin-right: 74px;
  min-width: fit-content;
`;

const InfoCont = styled.div`
  display: flex;
  margin-right: 98px;
  min-width: fit-content;
`;

const BrandName = styled.p`
  font-size: 2rem;
  color: #666666;
  font-weight: 400;
  margin-bottom: 15px;
  min-width: fit-content;
`;

const ProductName = styled.strong`
  font-size: 2.4rem;
  color: #666666;
  font-weight: 700;
  min-width: fit-content;
`;

const ImgCont = styled.div`
  width: 150px;
  height: 150px;
  background-color: #c4c4c4;
  margin-right: 48px;
  border-radius: 10px;
  min-width: fit-content;
`;

const NameCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Quantity = styled.span`
  font-size: 2rem;
  color: #000000;
  font-weight: 400;
  margin-right: 129px;
  min-width: fit-content;
`;

const Price = styled.div`
  font-size: 2.4rem;
  color: #666666;
  font-weight: 700;
  margin-right: 103px;
  min-width: fit-content;
`;

const ShipmentState = styled.p`
  font-size: 2rem;
  color: #666666;
  font-weight: 400;
  margin-right: 85px;
  min-width: fit-content;
`;

const ReviewBtn = styled.button`
  font-size: 1.8rem;
  color: #000000;
  font-weight: 400;
  box-sizing: border-box;
  border: 1px solid #666666;
  padding: 3px 10px;
  min-width: fit-content;
`;
