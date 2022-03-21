/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import ProductReview from "../ProductReviewEntry";
import StarRating from "../shared/StarRating";
import Button from "../shared/Button";

export default function ProductReviewList() {
  return (
    <ReviewContainer>
      <TotalReviewStar>
        <h3 className="title">리뷰</h3>
        <span className="review-total">3</span>
        <span className="review-star-title">총 평균</span>
        <span className="review-star-average">3.0</span>
        <StarRating />
      </TotalReviewStar>

      <hr className="review-linebar" />
      <ProductReview />
      <ProductReview />
      <ProductReview />
      <ProductReview />
      <ProductReview />
    </ReviewContainer>
  );
}

const ReviewContainer = styled.section`
  width: 100%;
  margin-top: 107px;
  .review-linebar {
    margin-top: 16px;
    border: 1px solid #a2a2a2;
  }
`;

const TotalReviewStar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .title,
  .review-total {
    margin-right: 15px;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
  }

  .review-star-title {
    margin: 0 27px 0 49px;
    font-weight: 700;
    font-size: 20px;
    color: #666666;
  }

  .review-star-average {
    margin-right: 9px;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #847258;
  }
`;
