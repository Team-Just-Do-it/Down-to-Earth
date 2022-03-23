import styled from "@emotion/styled";
import CommentButton from "../shared/CommentButton";

export default function ReplyComment() {
  return (
    <Container>
      <ReviewInfo>
        <ReviewUserInfo>
          <div>
            <span className="user-nickname">nickname</span>
            <span className="user-postdate">2020-03-01</span>
          </div>
          <ReviewEdit>
            <span>수정</span>
            <span>삭제</span>
          </ReviewEdit>
        </ReviewUserInfo>

        <ReviewText placeholder="댓글을 작성해주세요." />
        <CommentButton type="button" color="dark" flex="end">
          등록
        </CommentButton>
      </ReviewInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
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
  display: flex;
  justify-content: space-between;

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

const ReviewEdit = styled.div`
  span {
    margin-left: 13px;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #666666;
  }
`;

const ReviewText = styled.textarea`
  margin-bottom: 15px;
  padding: 11px 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #666666;
`;
