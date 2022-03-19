import styled from "@emotion/styled";
import Link from "next/link";
styled;

export const Navigation = () => {
  return (
    <Header>
      <Link href="/">down to earth.</Link>
      <Navigator>
        <Link href="/about">about</Link>
        <Link href="/products">products</Link>
        <Link href="/events">events</Link>
      </Navigator>
    </Header>
  );
};

const Header = styled.header``;

const Navigator = styled.nav``;
