import styled from "@emotion/styled";
import { PurChaseHistoryCard } from "./Card";

export const PurchaseHistoryCont = () => {
  return (
    <Cont>
      <PurchaseHistoryTitle>구매내역</PurchaseHistoryTitle>
      <PurchaseHistoryContent>
        <PurchaseHistoryCategory>
          <OrderDate>주문일자</OrderDate>
          <Quantity>수량</Quantity>
          <Price>결제금액</Price>
          <ShipmentState>상태</ShipmentState>
        </PurchaseHistoryCategory>
        <PurChaseHistoryCard />
        <PurChaseHistoryCard />
      </PurchaseHistoryContent>
    </Cont>
  );
};

const Cont = styled.section``;

const PurchaseHistoryContent = styled.div`
  margin-top: 28px;
`;

const PurchaseHistoryTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
`;

const PurchaseHistoryCategory = styled.div`
  display: flex;
  padding: 0px 52px;
  width: 100%;
  border-bottom: 1px solid #a1a1a1;
  color: #666666;
  font-size: 2rem;
  padding-bottom: 15px;
`;

const OrderDate = styled.p`
  margin-right: 454px;
`;
const Quantity = styled.p`
  margin-right: 121px;
`;
const Price = styled.p`
  margin-right: 138px;
`;
const ShipmentState = styled.p``;
