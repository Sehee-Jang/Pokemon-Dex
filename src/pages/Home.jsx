import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

// "포켓몬 도감 시작하기" 버튼을 클릭하면 도감 페이지로 이동하는 랜딩 페이지
const Home = () => {
  const navigate = useNavigate();
  return (
    <MainBox>
      <img
        src='https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png'
        alt='Pokemon Logo'
        style={{ width: "600px" }}
      />
      <Button
        $primary
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          transition: "background-color 0.3s",
        }}
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </Button>
    </MainBox>
  );
};

export default Home;
