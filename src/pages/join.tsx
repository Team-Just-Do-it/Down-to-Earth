import React, { useState } from "react"; 
import type { NextPage } from "next";
import styled from "@emotion/styled"

const Join: NextPage = () => {

  return (
    <JoinContainer>
      <JoinForm>
        <h2>회원가입</h2>	
        <label htmlFor="user-id"></label>
        <input type="text" id="user-id" placeholder="이메일"/>
        <label htmlFor="user-pw"></label>
        <input type="password" id="user-pw" placeholder="비밀번호"/>
        <label htmlFor="user-pw-check"></label>
        <input type="password" id="user-pw-check" placeholder="비밀번호 확인"/>
        <TextAlert>비밀번호가 일치하지 않습니다.</TextAlert>
        {/* {idError && <TextAlert>아이디 또는 비밀번호가 일치하지 않습니다.</TextAlert>}  */}
        <JoinButton type="button">회원가입</JoinButton>
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
  height: 100vh; 

`
const JoinForm = styled.form`
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

    &:hover{
    opacity: 0.3; 
    transition-duration: 0.3s; 
    }
  }
`

const TextAlert = styled.span`
  color: #DC5454; 
  font-size: 14px; 
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