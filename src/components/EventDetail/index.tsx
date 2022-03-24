import styled from "@emotion/styled";
import Image from "next/image";
import Comment from "../Comment";
import ReplyComment from "../Comment/ReplyComment";
import Product from "../Product";

const EventDetail = () => {
  return (
    <EventContainer>
      <Event>
        <li className="event-title">이벤트 제목</li>
        <li className="event-period">
          2020-03-01 ~ 2022-04-01
          <Image
            src="/assets/share.png"
            alt="공유 이미지"
            width="40px"
            height="40px"
          />
        </li>
        <Image
          src="/assets/sample_event_detail.png"
          alt="이벤트 상세 사진"
          width={958}
          height={400}
        />
        <li className="event-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          perspiciatis atque voluptate. Veritatis inventore voluptatibus, dicta
          perspiciatis, magni tenetur, cum ipsa facilis illum impedit adipisci
          accusantium iure. Temporibus, tempora natus.
        </li>
      </Event>
      <h3>관련 상품</h3>
      <RelativeProducts>
        <Product />
        <Product />
        <Product />
      </RelativeProducts>
      <Comments>
        <h3>댓글</h3>
        <hr />
        <div>
          <ReplyComment />
        </div>
      </Comments>
    </EventContainer>
  );
};

const EventContainer = styled.section`
  padding: 80px;
  h3 {
    margin-bottom: 34px;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 34px;
  }
`;

const Event = styled.article`
  width: 958px;
  .event-title {
    margin-bottom: 22px;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.4rem;
  }
  .event-period {
    display: flex;
    gap: 23px;
    align-items: center;
    margin-bottom: 48px;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 34px;
    color: #666666;
  }
  .event-content {
    margin-top: 43px;
    margin-bottom: 51px;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3.4rem;
    color: #666666;
  }
`;

const RelativeProducts = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 270px);
  gap: 31px;
  margin-bottom: 140px;
`;

const Comments = styled.article`
  div {
    margin-top: 25px;
  }
`;

export default EventDetail;
