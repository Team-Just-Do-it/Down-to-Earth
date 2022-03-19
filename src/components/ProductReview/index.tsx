import styled from "@emotion/styled";

export default function ProductReview() {
  return (
<<<<<<< HEAD
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
=======
    <ReviewContainer>
      <ReviewWrapper>
        <h3 className="title">리뷰</h3>
        <span className="review-total">3</span>
        <span className="review-star-title">총 평균</span>
        <span className="review-star-average">3.0</span>
        <div className="rating">
          <input
            type="checkbox"
            name="rating"
            id="rating1"
            value="1"
            className="rate_radio"
            title="1점"
          />
          <label htmlFor="rating1"></label>
          <input
            type="checkbox"
            name="rating"
            id="rating2"
            value="2"
            className="rate_radio"
            title="2점"
          />
          <label htmlFor="rating2"></label>
          <input
            type="checkbox"
            name="rating"
            id="rating3"
            value="3"
            className="rate_radio"
            title="3점"
          />
          <label htmlFor="rating3"></label>
          <input
            type="checkbox"
            name="rating"
            id="rating4"
            value="4"
            className="rate_radio"
            title="4점"
          />
          <label htmlFor="rating4"></label>
          <input
            type="checkbox"
            name="rating"
            id="rating5"
            value="5"
            className="rate_radio"
            title="5점"
          />
          <label htmlFor="rating5"></label>
        </div>
      </ReviewWrapper>

      <hr className="review-linebar" />
      <ReviewInfo></ReviewInfo>
    </ReviewContainer>
  );
}

const ReviewContainer = styled.section`
  width: 100%;
  .review-linebar {
    margin-top: 16px;
    border: 1px solid #a2a2a2;
  }
`;

const ReviewInfo = styled.div`
  width: 100%;
  max-width: 100%;
`;

const ReviewWrapper = styled.div`
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

  .rating {
    display: flex;
    align-items: center;
    width: 200px;
    height: 35px;
  }

  .rating .rate_radio {
    width: 20px;
    height: 35px;
    cursor: pointer;
    display: none;
  }
  .rating .rate_radio + label {
    width: 35px;
    height: 35px;
    margin-left: 4px;
    background: url("/assets/star.png") no-repeat 0 5px;
    cursor: pointer;
  }
  .rating .rate_radio:checked + label {
    background: yellow;
    background: url("/assets/star-fill.png") no-repeat 0 5px;
  }
`;
>>>>>>> 6ead9c7 (💄Add: Reveiw start and title)
