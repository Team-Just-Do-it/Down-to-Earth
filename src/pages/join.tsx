import React, { useState } from "react"; 
import type { NextPage } from "next";
import styled from "@emotion/styled" 
import Router from "next/router";

const Join: NextPage = () => {

  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false); 
  
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.currentTarget.value); 
  }; 

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);   
  }

  const handleCheckPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.currentTarget.value);   
  }

  
  const submitForm = () => { 
    let validation = true; 

    let emailValidation = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let pwValidation =  /^[A-Za-z0-9]{6,12}$/;

    

    // 아이디 유효성 체크
    if(!emailValidation.test(userEmail)) {
      alert("이메일 형식을 확인해주세요"); 
      validation = false; 
    }  
    
    // 비밀번호 유효성 체크
    if(!pwValidation.test(password)) {
      alert("비밀번호를 확인해주세요 (영문 숫자 조합 6~12자)")
      validation = false; 
    }
    // 비밀번호 일치 체크
    if (password !== checkPassword) {
      setPasswordError(true); 
      validation = false; 
    } else {
      setPasswordError(false);
    }

    // 페이지 이동
    if(validation === true) {
      Router.push("/join_info"); 
    }
  }

  return (  
    <JoinContainer>
      <JoinForm>
        <h2>회원가입</h2>	
        <label htmlFor="user-id"></label>
        <input 
          type="text" 
          id="user-id" 
          placeholder="example@earth.com"
          value={userEmail}
          onChange={handleEmailInput}
        />
        <label htmlFor="user-pw"></label>
        <input 
          type="password" 
          id="user-pw" 
          value={password}
          placeholder="영문 숫자조합 6~12자리"
          onChange={handlePasswordInput}
        />
        <label htmlFor="user-pw-check"></label>
        <input 
          type="password" 
          id="user-pw-check" 
          value={checkPassword}
          placeholder="비밀번호 확인"
          onChange={handleCheckPasswordInput}
        />
        {passwordError && <TextAlert>비밀번호가 일치하지 않습니다.</TextAlert>}
        <JoinButton 
          type="button"
          onClick={submitForm}
        >회원가입
        </JoinButton>
        <KakaoJoinButton type="button">카카오로 시작하기</KakaoJoinButton>
        <NaverJoinButton type="button">네이버로 시작하기</NaverJoinButton>
      </JoinForm>
    </JoinContainer>
  )
} 
export default Join;

const JoinContainer = styled.section`
  display: flex;  
  justify-content: center; 
  align-items: center;
  width: 100%; 
  height: 80vh; 
`
const JoinForm = styled.form`
  display: flex; 
  flex-direction: column;  
  align-items: center; 
  width: 365px;   

  h2 {
    font-size: 2.8rem; 
    font-weight: 500; 
    margin-bottom: 20px; 
  }
  input {
    width: 100%;
    height: 50px; 
    box-sizing: border-box; 
    padding: 10px; 
    margin-bottom: 20px;
    font-size: 20px;
  }
  button {
    width: 100%; 
    height: 50px;
    font-size: 20px; 
    font-weight: bold; 
    border-radius: 10px; 
    margin: 10px 0 10px 0;

    &:hover{
    opacity: 0.3; 
    transition-duration: 0.3s; 
    }
  }
`

const TextAlert = styled.span`
  color: #DC5454; 
  font-size: 1.4rem; 
`
const JoinButton = styled.button`
  background-color: #847258;
  color: #FFF; 
`
const KakaoJoinButton = styled.button`
  background-color: #FFE812; 
  color: #666666; 
`
const NaverJoinButton = styled.button`
  background-color: #2DB400; 
  color: #FFF; 
`