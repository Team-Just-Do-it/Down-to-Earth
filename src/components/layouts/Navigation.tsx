import styled from "@emotion/styled";
import Link from "next/link";

export const Navigation = () => {
  return (
    <Header>
      <Navigator>
        <Link href="/"><img src="/assets/logo.png" alt="logo" /></Link> 
        <ul>
          <li><Link href="/about">about</Link></li>
          <li><Link href="/products">products</Link></li>
          <li><Link href="/events">events</Link></li>
        </ul> 
        <label htmlFor="search-bar"></label>
        <input type="text" placeholder="검색어를 입력해주세요"/> 
        <JoinContainer>
          <Link href="/login">로그인</Link>
          <Link href="/join">회원가입</Link>
        </JoinContainer>
      </Navigator>
    </Header>
  );
};

const Header = styled.header`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  width: 100%; 
  height: 8rem;
  box-sizing: border-box; 
  padding: 0 10rem; 
`;

const Navigator = styled.nav`
  display: flex; 
  justify-content: space-between;
  align-items: center; 
  width: 100%; 

  img {
    height: 2.5rem;
    margin-bottom: 1rem;
    cursor: pointer; 
  }
  ul { 
    display: flex; 
    justify-content: space-evenly;
    font-size: 1.8rem; 
    font-weight: bold; 
    width: 30rem; 
    flex-shrink: 0;
    
    li:hover {
      opacity: 0.3; 
    }  
  }
  input {
    background: url("/assets/search.svg") no-repeat 1rem 0.9rem; 
    width: 25rem;
    height: 4rem; 
    border-radius: 4rem; 
    border: 1px solid #A1A1A1; 
    box-sizing: border-box;
    padding:  0 4rem ;
  } 
`;

const JoinContainer = styled.div`
  width: 12rem;
  display: flex; 
  justify-content: space-between;
  flex-shrink: 0; 
  font-size: 1.4rem;
`
