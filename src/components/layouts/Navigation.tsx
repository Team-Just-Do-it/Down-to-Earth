import styled from "@emotion/styled";
import Link from "next/link";
import theme from "../../styles/theme";

export const Navigation = () => {
  return (
    <Header>
      <Navigator>
        <Link href="/"><img src="/assets/logo.png" alt="logo" /></Link> 
        <ProductList>
          <li className="navigation-list"><Link href="/about">about</Link></li>
          <li className="navigation-list">
            <Link href="/products">products</Link>
            <ProductCategoryLists>
              <li className="product-category-list">
                <Link href="/products">전체</Link>
              </li>
              <li className="product-category-list">
                <Link href="/products">뷰티</Link>
              </li>
              <li className="product-category-list">
                <Link href="/products">욕실</Link>
              </li>
              <li className="product-category-list">
                <Link href="/products">주방</Link>
              </li>
              <li className="product-category-list">
                <Link href="/products">잡화</Link>
              </li>
            </ProductCategoryLists>
          </li>
          <li className="navigation-list">
            <Link href="/events">events</Link>
          </li>
        </ProductList> 
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
  height: 80px;
  box-sizing: border-box; 
  padding: 0 100px; 
`

const Navigator = styled.nav`
  display: flex; 
  justify-content: space-between;
  align-items: center; 
  width: 100%; 

  img {
    height: 25px;
    margin-bottom: 10px;
    cursor: pointer; 

  input {
    background: url("/assets/search.svg") no-repeat 1rem 0.9rem; 
    width: 250px;
    height: 40px; 
    border-radius: 40px; 
    border: 1px solid #A1A1A1; 
    box-sizing: border-box;
    padding:  0 40px;
  } 
`

const ProductList = styled.ul`
position: relative; 
  display: flex; 
  justify-content: space-evenly;
  width: 30rem;  
  flex-shrink: 0;
  .navigation-list {
      font-size: 1.8rem; 
      font-weight: bold;
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
  width: 120px;
  display: flex; 
  justify-content: space-between;
  flex-shrink: 0; 
  font-size: 1.4rem;
`

const CartIconContainer = styled.div`    
  position: relative; 

  div {  
    position: absolute; 
    left: 13px; 
    top: 15px;
    width: 20px; 
    height: 20px;
    background: ${theme.mainColor};
    border-radius: 24px; 
    text-align: center;
  }
  
  span {
    color: #FFF;  
    line-height: 1.7;
    font-size: 1.2rem; 
  } 
`

const ProductCategoryLists = styled.ul`
  position: absolute; 
  top: 40px;
  right: 95px;
  display: flex; 
  flex-direction: column;
  align-items: center;  
  width: 120px;  
  border-radius: 5px;
  background: #FFF;  
  z-index: 10;
  overflow: hidden;
  box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.12);

  .product-category-list {
    width: 100%;
    height: 100%; 
    font-size: 1.6rem;
    font-weight: 500;  
    line-height: 3;
    text-align: center;
  }
  .product-category-list:hover {
    background: #EAE0D6; 
    color: #FFF; 
  }
`
