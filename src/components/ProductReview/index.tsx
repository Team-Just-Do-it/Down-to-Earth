import styled from "@emotion/styled";

export default function ProductReview() {
  return (
    <ReviewWrapper>
      <h3>리뷰</h3>
      <span>총 평균</span>
      <span>3.0</span>
      <AverageStarBox></AverageStarBox>
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.section``;

const AverageStarBox = styled.div``;
