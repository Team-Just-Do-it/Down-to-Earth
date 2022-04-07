import type { NextPage } from "next";
import styled from "@emotion/styled";
import Event from "../../components/Event";
import EventsList from "../../components/EventsList";
import ItemsContainer from "../../components/shared/ItemsContainer";
import { useEffect, useState } from "react";
import { fetcher } from "../../utils/fetcher";
import eventDataProps from "../../interfaces/EventData.interface";
import { useRouter } from "next/router";

const EventPage: NextPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetcher("/events?populate=*").then((res) => {
      setEvents(res.data);
    });
  }, []);

  return (
    <Container>
      <EventsList />
      <ItemsContainer itemLength={3} itemWidth={"380px"} itemGap={"60px"}>
        {events.map((event: eventDataProps, index) => {
          return (
            <Event
              key={`event_${index}`}
              eventId={event.id}
              eventTitle={event.attributes.title}
              eventContent={event.attributes.content.substring(0, 150)}
              eventStart={event.attributes.start_period}
              eventEnd={event.attributes.end_period}
              eventImage={event.attributes.images.data[0].attributes.image_url}
            ></Event>
          );
        })}
      </ItemsContainer>
    </Container>
  );
};

const Container = styled.section`
  padding-top: 72px;
  padding-left: 96px;
`;

export default EventPage;
