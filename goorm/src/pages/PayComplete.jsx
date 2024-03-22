import React, { useState } from "react";
import styled, { css } from "styled-components";
import Header from "../components/Header.jsx";

const Background = styled.div`
  position: relative;
  margin: auto;
  width: 1280px;
  // height: 832px;
  height: 100vh;
  font-size: 40px;
`;
const Address = styled.div`
  position: relative;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 305px;
  height: 55px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 55px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #00591b;
  border: 1px solid #004716;
`;
const PickUp = styled.div`
  position: relative;
  margin: auto;
  width: 305px;
  height: 55px;
  background: #004716;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 55px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #ffffff;
`;

const PayComplete = () => {
  return (
    <Background>
      <Header />
      <img
        src={`${process.env.PUBLIC_URL}/images/결제 완료.png`}
        width="1280px"
        style={{
          position: "relative",
          textAlign: "center",
          paddingRight: "22px",
        }}
      />
      <Address>배송지 입력하기</Address>
      <PickUp>픽업하러 가기</PickUp>
    </Background>
  );
};

export default PayComplete;
