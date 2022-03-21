import styled from "@emotion/styled";

export default function SmallStarRating() {
  return (
    <Rating>
      <input
        type="checkbox"
        name="rating"
        id="small-rating1"
        value="1"
        className="small-star_radio"
        title="1점"
      />
      <label htmlFor="small-rating1"></label>
      <input
        type="checkbox"
        name="rating"
        id="small-rating2"
        value="2"
        className="small-star_radio"
        title="2점"
      />
      <label htmlFor="small-rating2"></label>
      <input
        type="checkbox"
        name="rating"
        id="small-rating3"
        value="3"
        className="small-star_radio"
        title="3점"
      />
      <label htmlFor="small-rating3"></label>
      <input
        type="checkbox"
        name="rating"
        id="small-rating4"
        value="4"
        className="small-star_radio"
        title="4점"
      />
      <label htmlFor="small-rating4"></label>
      <input
        type="checkbox"
        name="rating"
        id="small-rating5"
        value="5"
        className="small-star_radio"
        title="5점"
      />
      <label htmlFor="small-rating5"></label>
    </Rating>
  );
}

const Rating = styled.div`
  display: flex;
  align-items: center;

  .small-star_radio {
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: none;
  }
  .small-star_radio + label {
    width: 20px;
    height: 20px;
    margin-left: 4px;
    background: url("/assets/star.png") no-repeat;
    background-size: 20px 20px;
    cursor: pointer;
  }
  .small-star_radio:checked + label {
    background: url("/assets/star-fill.png") no-repeat;
    background-size: 20px 20px;
  }
`;
