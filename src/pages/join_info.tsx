import React, { useState } from "react"; 
import type { NextPage } from "next";
import styled from "@emotion/styled"
import Router from "next/router";
import theme from "../styles/theme";

const Join: NextPage = () => {
  const [userNickname, setUserNickname] = useState<string>("");
  const [checkButton, setCheckButton] = useState<boolean>(false); 

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname(e.currentTarget.value);  
  }

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    setCheckButton((current)=>!current); 
  }
  
  const onSubmit = () => {
    if(userNickname) {
      Router.push("/"); 
    } else {
      alert("닉네임을 입력해주세요")
    }
  }

  return (
    <JoinInfoContainer>
      <JoinForm>
        <h2>추가정보</h2>	
        <label htmlFor="user-nickname"></label>
        <input 
          type="text" 
          id="user-nickname" 
          placeholder="닉네임을 입력해주세요"
          onChange={handleNickname}
          value={userNickname}
        />   
        <CheckButton
          check={checkButton}
          onClick={handleButton}
        >판매자입니다</CheckButton>
        <JoinButton 
          type="button"
          onClick={onSubmit}
        >회원가입 완료하기</JoinButton> 
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
  height: 80vh; 

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

interface ContainerTypeProps {
  check: boolean; 
}
const CheckButton = styled.button<ContainerTypeProps>`
  height: 75px;
  background: ${(props) => 
  props.check ? "url('/assets/checked.svg') no-repeat 20px 20px;" : "url('/assets/check.svg') no-repeat 20px 20px;"}; 
  box-sizing: border-box; 
  padding: 10px;
  background-color: ${(props) => 
  props.check ? "#CDC7BF;" : "#FFF;"}; 
  border: 1px solid ${theme.mainColor};  
`
const JoinButton = styled.button`
  background-color: ${theme.mainColor};
  color: #FFF; 
  border-radius: 10px; 
  font-weight: bold; 
  height: 50px; 
` 