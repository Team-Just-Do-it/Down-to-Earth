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
  padding-top: 72px;
  padding-left: 96px;
`;

export default EventDetailPage;
