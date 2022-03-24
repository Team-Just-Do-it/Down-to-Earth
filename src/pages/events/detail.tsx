import styled from "@emotion/styled";
import { NextPage } from "next";
import EventDetail from "../../components/EventDetail";
import EventsList from "../../components/EventsList";

const EventDetailPage: NextPage = () => {
  return (
    <Container>
      <EventsList />
      <EventDetail />
    </Container>
  );
};

const Container = styled.section`
  padding: 72px 0 0 96px;
`;

export default EventDetailPage;
