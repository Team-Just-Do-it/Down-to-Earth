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
        <LoggedInContainer>
          <img src="/assets/user.svg" alt="user icon" /> 
          <CartIconContainer>
            <div>
              <span>3</span>
            </div>
            <img src="/assets/cart.svg" alt="cart icon" />
          </CartIconContainer> 
        </LoggedInContainer>
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
`

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
`

// 로그인 성공 시 사용
const LoggedInContainer = styled.div`
  width: 10rem; 
  display: flex; 
  align-items: center;
  justify-content: space-between; 
  margin-top: 10px; 
  display: none;
  
`
const JoinContainer = styled.div`
  width: 12rem;
  display: flex; 
  justify-content: space-between;
  flex-shrink: 0; 
  font-size: 1.4rem;
`

const CartIconContainer = styled.div`    
  position: relative; 

  div {  
    position: absolute; 
    left: 1.3rem; 
    top: 1.5rem;
    width: 2rem; 
    height: 2rem;
    background: #847258;
    border-radius: 2.4rem; 
    text-align: center;
  }
  
  span {
    color: #FFF;  
    line-height: 1.7;
    font-size: 1.2rem; 
  } 
`
