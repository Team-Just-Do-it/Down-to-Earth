import type { NextPage } from "next";
import styled from "@emotion/styled";
import Event from "../../components/Event";
import EventsList from "../../components/EventsList";

const EventPage: NextPage = () => {
  return (
    <Container>
      <EventsList />
      <EventContainer>
        <Event />
        <Event />
        <Event />
      </EventContainer>
    </Container>
  );
};

const Container = styled.section`
  padding-top: 72px;
  padding-left: 96px;
`;

const EventContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 60px;
  padding-top: 41px;
`;

export default EventPage;
