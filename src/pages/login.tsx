import React, { useState } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import Link from "next/link";
import Router from "next/router";

const Login: NextPage = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userIdPwError, setUserIdPwError] = useState(false);

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);  
    console.log(userId); 
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPw(e.currentTarget.value);  
    console.log(userPw); 
  }

  const handleOnClickSubmit = () => {
    if(userId && userPw) {
      Router.push("/"); 
    } else {
      alert("아이디와 비밀번호를 입력해주세요")
      setUserIdPwError(true); 
    }

  }
  return (
    <LoginContainer>
      <LoginForm>
        <h2>로그인</h2>
        <label htmlFor="user-id"></label>
        <input 
          type="text" 
          id="user-id" 
          placeholder="이메일"
          value={userId}
          onChange={handleId}
        />
        <label htmlFor="user-pw"></label>
        <input 
          type="password" 
          id="user-pw" 
          placeholder="비밀번호"
          value={userPw}
          onChange={handlePassword}
        /> 
        {userIdPwError && <TextAlert>아이디 또는 비밀번호가 일치하지 않습니다.</TextAlert>}
        <LoginButton 
          type="button"
          onClick={handleOnClickSubmit}
          >로그인</LoginButton>
        <KakaoLoginButton type="button">카카오로 로그인</KakaoLoginButton>
        <NaverLoginButton type="button">네이버로 로그인</NaverLoginButton>
        <TextJoin>
          아직 회원이 아니신가요?
          <Link href="/join">회원가입 바로가기</Link>
        </TextJoin>
      </LoginForm>
    </LoginContainer>
  );
};
export default Login;

const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 365px;

  h2 {
    font-size: 28px;
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

    &:hover {
      opacity: 0.3;
      transition-duration: 0.3s;
    }
  }
`;

const TextAlert = styled.span`
  color: #dc5454;
  font-size: 14px;
`;

const TextJoin = styled.span`
  color: #666666;
  font-size: 14px;
  margin-top: 10px;

  a {
    margin-left: 3px;
    color: #666666;
    text-decoration: underline;
  }
`;
const LoginButton = styled.button`
  background-color: #847258;
  color: #fff;
`;
const KakaoLoginButton = styled.button`
  background-color: #ffe812;
  color: #666666;
`;
const NaverLoginButton = styled.button`
  background-color: #2db400;
  color: #fff;
`;
