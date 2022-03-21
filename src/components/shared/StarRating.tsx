import styled from "@emotion/styled";

export default function StarRating() {
  return (
    <Rating>
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
    </Rating>
  );
}

const Rating = styled.div`
  display: flex;
  align-items: center;

  .rate_radio {
    width: 20px;
    height: 35px;
    cursor: pointer;
    display: none;
  }
  .rate_radio + label {
    width: 35px;
    height: 35px;
    margin-left: 4px;
    background: url("/assets/star.png") no-repeat 0 5px;
    cursor: pointer;
  }
  .rate_radio:checked + label {
    background: yellow;
    background: url("/assets/star-fill.png") no-repeat 0 5px;
  }
`;
