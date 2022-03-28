import type { NextPage } from "next";
import styled from "@emotion/styled";
import Event from "../../components/Event";
import EventsList from "../../components/EventsList";
import ItemsContainer from "../../components/shared/ItemsContainer";

const EventPage: NextPage = () => {
  return (
    <Container>
      <EventsList />
      <ItemsContainer itemLength={3} itemWidth={"380px"} itemGap={"60px"}>
        <Event />
        <Event />
        <Event />
      </ItemsContainer>
    </Container>
  );
};

const Container = styled.section`
  padding-top: 72px;
  padding-left: 96px;
`;

export default EventPage;
