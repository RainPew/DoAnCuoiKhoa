import React from "react";
import styled from "styled-components";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  BoldLink,
} from "./common";

const BoxContainers = styled.div`
  width: 380px;
  min-height: 650px;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin-top: 50px;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8rem;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width: 140%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(0 178 238) 20%,
    rgba(100, 149, 237) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 50px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  // cho nó nổi lên trên font
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Signup(props) {
  return (
    <AppContainer>
      <BoxContainers>
        <TopContainer>
          <BackDrop />
          <HeaderContainer>
            <HeaderText>Hello</HeaderText>
            <HeaderText>PMS</HeaderText>
            <SmallText>Đăng Ký Tài Khoản!</SmallText>
          </HeaderContainer>
        </TopContainer>
        <InnerContainer>
          <BoxContainer>
            <FormContainer>
              <Input type="text" placeholder="Full Name" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Confirm Password" />
            </FormContainer>
            <br />
            <SubmitButton type="submit">Đăng Ký</SubmitButton>
            <br />
          </BoxContainer>

        </InnerContainer>
      </BoxContainers>
    </AppContainer>
  );
}
