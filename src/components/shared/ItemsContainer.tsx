import styled from "@emotion/styled";
import sizes from "../../styles/sizes";

interface ItemsContainerProps {
  listTitle?: string;
  itemLength: number;
  itemWidth: string;
  itemGap: string;
  children: React.ReactNode;
}

const ItemsContainer = ({
  listTitle,
  itemLength,
  itemWidth,
  itemGap,
  children,
}: ItemsContainerProps) => {
  return (
    <div>
      <Title>{listTitle}</Title>
      <ItemsContainerBlock
        itemLength={itemLength}
        itemWidth={itemWidth}
        itemGap={itemGap}
      >
        {children}
      </ItemsContainerBlock>
    </div>
  );
};

const Title = styled.div`
  margin-bottom: 41px;
  font-size: ${sizes.large};
  font-weight: 700;
  line-height: 34px;
`;

const ItemsContainerBlock = styled.div<ItemsContainerProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.itemLength},
    ${(props) => props.itemWidth}
  );
  gap: ${(props) => props.itemGap};
`;

export default ItemsContainer;
