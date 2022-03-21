import styled from "@emotion/styled";
import SmallStar from "../shared/SmallStarRating";
import Button from "../shared/Button";

export default function ProductReviewEntry() {
  return (
    <Review>
      <ProductImageContainer>
        <ProductImage />
        <ProductRatings>
          <span className="star-point">3.0</span>
          <SmallStar />
        </ProductRatings>
      </ProductImageContainer>

      <ReviewInfo>
        <ReviewUserInfo>
          <span className="user-nickname">nickname</span>
          <span className="user-postdate">2020-03-01</span>
        </ReviewUserInfo>

        <ReviewText>
          투명하되 위하여서 예가 미묘한 꽃이 만물은 속잎나고, 이상은 쓸쓸하랴?
          바로 작고 이상은 새 것이 위하여 평화스러운 운다. 소담스러운 위하여서,
          그와 끓는 찬미를 스며들어 소금이라 날카로우나 있는가? 가치를 끝에
          이상, 구하지 행복스럽고 위하여 그들의 가장 것이다. 착목한는 꽃이 어디
          있으며, 살았으며, 영락과 노래하며 운다.
        </ReviewText>

        <Button type="button">댓글 2</Button>
      </ReviewInfo>
    </Review>
  );
}

const Review = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 29px 0 50px 179px;
`;

const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductImage = styled.div`
  width: 170px;
  height: 170px;
  background: #c4c4c4;
  margin-bottom: 1rem;
`;
const ProductRatings = styled.div`
  display: flex;
  align-items: center;

  .star-point {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #847258;
    margin-right: 1rem;
  }
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  margin-left: 49px;

  .review-comment-button {
    width: 107px;
    height: 34px;
    border: 1px solid #847258;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #847258;
    margin-top: 15px;
  }
`;

const ReviewUserInfo = styled.div`
  margin-bottom: 15px;

  .user-nickname {
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #666666;
    margin-right: 39px;
  }

  .user-postdate {
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #666666;
  }
`;

const ReviewText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #666666;
`;
