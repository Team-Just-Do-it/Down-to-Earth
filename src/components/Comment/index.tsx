import styled from "@emotion/styled";
import CommentButton from "../shared/CommentButton";
import ReplyComment from "./ReplyComment";

export default function Comment() {
  return (
    <Container>
      <CommentButton type="button">댓글 2개</CommentButton>
      <ReplyComment />
    </Container>
  );
}

const Container = styled.div``;
