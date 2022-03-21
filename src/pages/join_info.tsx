import React, { useState } from "react"; 
import type { NextPage } from "next";
import styled from "@emotion/styled"

const Join: NextPage = () => {

  return (
    <JoinInfoContainer>
      <JoinForm>
        <h2>추가정보</h2>	
        <label htmlFor="user-nickname"></label>
        <input type="text" id="user-nickname" placeholder="닉네임을 입력해주세요"/>  
        {/* {idError && <TextAlert>아이디 또는 비밀번호가 일치하지 않습니다.</TextAlert>}  */}
        <CheckButton>판매자입니다</CheckButton>
        <JoinButton type="button">회원가입 완료하기</JoinButton> 
      </JoinForm>
    </JoinInfoContainer>
  )
} 
export default Join;

const JoinInfoContainer = styled.section`
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
    font-size: 20px; 
    margin: 10px 0 10px 0;

    &:hover{
    opacity: 0.3; 
    transition-duration: 0.3s; 
    }
  }
`
const CheckButton = styled.button`
  height: 75px;
  background: url("/assets/check.svg") no-repeat 20px 20px;
  box-sizing: border-box; 
  padding: 10px;
  background-color: #FFF; 
  border: 1px solid #847258;  
`
const JoinButton = styled.button`
  background-color: #847258;
  color: #FFF; 
  border-radius: 10px; 
  font-weight: bold; 
  height: 50px; 
` 