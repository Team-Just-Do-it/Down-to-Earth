import styled from "@emotion/styled";

export const Footer = () => {
  return <FooterContainer>down to earth. All rights reserved</FooterContainer>;
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 100px;
  background-color: #ebebeb;
  color: #666666;
`;
