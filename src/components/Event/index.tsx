import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Event = () => {
  return (
    <EventContainer>
      <Link href="/events/1">
        <a>
          <EventImage
            src="/assets/sample_event.png"
            alt="이벤트 사진"
            width="380px"
            height="250px"
          />
          <EventContents>
            <ul className="event-content">
              <EventTitle>이벤트 제목</EventTitle>
              <EventPeriod>2022-03-01 ~ 2022-04-01</EventPeriod>
            </ul>
            <ul className="event-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae
              quia atque temporibus? Illum eos libero labore officiis qui facere
              minima a, obcaecati ipsum hic rerum cum quod, accusantium ducimus?
            </ul>
          </EventContents>
        </a>
      </Link>
    </EventContainer>
  );
};

const EventContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 380px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

const EventImage = styled(Image)`
  border-radius: 10px;
`;

const EventContents = styled.ul`
  display: flex;
  flex-direction: column;

  .event-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-of-type(1) {
      margin-top: 15px;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      margin-top: 5px;
      font-size: 14px;
      line-height: 20px;
      color: #666666;
    }
  }
`;

const EventTitle = styled.li`
  font-size: 24px;
  line-height: 34px;
`;

const EventPeriod = styled.li`
  font-size: 14px;
  color: #666666;
`;

export default Event;
