import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import EventProps from "../../interfaces/Event.interface";
import { formDate } from "../../utils/formDate";

const Event = ({
  eventId,
  eventTitle,
  eventStart,
  eventEnd,
  eventContent,
  eventImage,
}: EventProps) => {
  return (
    <EventContainer>
      <Link href={`/events/${eventId}`}>
        <a>
          <EventImage
            src={eventImage}
            alt="이벤트 사진"
            width="380px"
            height="250px"
          />
          <EventContents>
            <ul className="event-content">
              <EventTitle>{eventTitle}</EventTitle>
              <EventPeriod>
                {formDate(eventStart)} ~ {formDate(eventEnd)}
              </EventPeriod>
            </ul>
            <ul className="event-content">{eventContent}</ul>
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

const EventImage = styled.img`
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
